import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum harus menjumlahkan dua angka dengan benar', () => {
  // Persiapan 
  const angka1 = 5;
  const angka2 = 10;
  const ekspektasi = 15;

  // Aksi 
  const hasil = sum(angka1, angka2);

  // Pengujian 
  assert.strictEqual(hasil, ekspektasi, '5 + 10 harusnya menghasilkan 15');
});

test('fungsi sum harus bekerja dengan angka negatif', () => {
  assert.strictEqual(sum(-1, -1), -2);
});