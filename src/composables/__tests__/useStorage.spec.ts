import { describe, test, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { movements, addMovement, deleteMovement } from '../useStorage';
import { Movement } from '../../modules/movements.types';

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: string): void {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('useStorage', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
  });

  test('initializes movements from localStorage', () => {
    const mockData = [
      {
        id: 1,
        title: 'Test Movement',
        amount: 100,
        description: 'Test description',
      },
    ];

    mockLocalStorage.setItem('movements', JSON.stringify(mockData));

    expect(movements.value);
  });

  test('adds a movement', () => {
    const newMovement: Movement = {
      id: 2,
      title: 'New Movement',
      amount: 100,
      description: 'Hello world',
      time: new Date(),
    };

    addMovement(newMovement);

    expect(movements.value).toContainEqual(newMovement);
    expect(localStorage.getItem('movements')).toContain(
      JSON.stringify(newMovement),
    );
  });

  test('deletes a movement', () => {
    const existingMovement: Movement = {
      id: 3,
      title: 'Existing Movement',
      amount: 300,
      description: 'definition 3',
      time: new Date(),
    };
    addMovement(existingMovement);
    deleteMovement(existingMovement.id);

    expect(movements.value).not.toContainEqual(existingMovement);
    expect(localStorage.getItem('movements')).not.toContain(
      JSON.stringify(existingMovement),
    );
  });
});
