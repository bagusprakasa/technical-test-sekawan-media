export const VALID_LOGIN = {
  username: 'candidat',
  password: "password123"
};

export const VALID_INPUT = {
  kk: 3525011711086058,
  nik: 3525015201880002,
  name: 'User Testing Candidat Galih Bagus Prakasa',
  address: 'Bondowoso',
  rt: 12,
  rw: 13,
  kelurahan: 'c2bd3c08745adeb9204ec736f550e017',
  tempatLahir: 'Bondowoso',
  tanggalLahir: '11111999',
  jk: 'L',
  statusKawin: '638dee9c57c748cdbfbd37c861e6923a',
  caleg: '0926a39a50026a88279cc70b79e9bc97',
  tps: '5a2d78d52a7a4c2f75062d2b5d5de7e1',
  status: 'cc07344b3bf31cddc6e5019dbe477ddd',
}

export const DUPLICATE_INPUT = {
  kk: 6674455888884110,
  nik: 9994455456244440,
  name: 'Desak Ayu',
  address: 'Pemenang',
  rt: 3,
  rw: 8,
  kelurahan: 'c2bd3c08745adeb9204ec736f550e017',
  tempatLahir: 'Pemenang',
  tanggalLahir: '25011900',
  jk: 'L',
  statusKawin: 'a15f49ad233056d8fee60c5aeeeef174',
  caleg: '0926a39a50026a88279cc70b79e9bc97',
  tps: '5a2d78d52a7a4c2f75062d2b5d5de7e1',
  status: 'cc07344b3bf31cddc6e5019dbe477ddd',
}

export const INVALID_INPUT = {
  kk: 'Testing',
  nik: 'Testing',
  name: 'Desak Ayu',
  address: 'Pemenang',
  rt: 3,
  rw: 8,
  kelurahan: 'c2bd3c08745adeb9204ec736f550e017',
  tempatLahir: 'Pemenang',
  tanggalLahir: '25011900',
  jk: 'L',
  statusKawin: 'a15f49ad233056d8fee60c5aeeeef174',
  caleg: '0926a39a50026a88279cc70b79e9bc97',
  tps: '5a2d78d52a7a4c2f75062d2b5d5de7e1',
  status: 'cc07344b3bf31cddc6e5019dbe477ddd',
}

export const INVALID_INPUT_ONE_CHAR = {
  kk: 'A',
  nik: 'A',
  name: 'A',
  address: 'A',
  rt: 3,
  rw: 8,
  kelurahan: 'c2bd3c08745adeb9204ec736f550e017',
  tempatLahir: 'A',
  tanggalLahir: '2',
  jk: 'L',
  statusKawin: 'a15f49ad233056d8fee60c5aeeeef174',
  caleg: '0926a39a50026a88279cc70b79e9bc97',
  tps: '5a2d78d52a7a4c2f75062d2b5d5de7e1',
  status: 'cc07344b3bf31cddc6e5019dbe477ddd',
}

export const INVALID_INPUT_SPACE = {
  kk: ' ',
  nik: ' ',
  name: ' ',
  address: ' ',
  rt: ' ',
  rw: ' ',
  kelurahan: ' ',
  tempatLahir: ' ',
  tanggalLahir: ' ',
  jk: ' ',
  statusKawin: ' ',
  caleg: ' ',
  tps: ' ',
  status: ' ',
  emptyValue: '',
}

export const SEARCH_DATA = {
  valid: 'aaaaa123',
  invalid: 'qq',
  blank: ' ',
};

export const FILTER_DATA = {
  provinsi: '7fd2c16526aa7c1ab7a409a99590438c',
  kota: 'd27d78aa3f70757bc6679d089d67d903',
  kecamatan: '2bb78a5a6c43fb577b02482124d3e0b9',
  kelurahan: 'c2bd3c08745adeb9204ec736f550e017',
  tps: '5a2d78d52a7a4c2f75062d2b5d5de7e1',
  assertion: 'aaaaa123',
  assertionBlank: 'Gina',
};

export const FILE ={
  valid: './tests/file/Data Pemilih 2023-07-14 22_32_58 Valid.xlsx',
  invalid: './tests/file/Data Pemilih 2023-07-14 22_32_58 Tidak Valid.xlsx',
  blank: './tests/file/Data Pemilih 2023-07-14 23_27_08 Blank.xlsx',
  duplikat: './tests/file/Data Pemilih 2023-07-14 22_32_58 Duplikat.xlsx',
  word: './tests/file/test.docx',
}