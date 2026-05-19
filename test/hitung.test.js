const { tambah, kurang } = require("../src/hitung");

const kiri = 71;
const kanan = 72;

// operasi
const hasilTambah = tambah(kiri, kanan);
const hasilKurang = kurang(kiri, kanan);
//TODO here ...

describe("Fungsi Matematika", () => {
  test(`hasil penjumlahan = ${kiri} + ${kanan} = ${hasilTambah}`, () => {
    expect(hasilTambah).toBe(tambah(kiri, kanan));
  });

  //TODO here....
});
