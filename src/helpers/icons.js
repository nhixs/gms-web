import React from 'react'

import Officer from "../assets/drawer/officer.svg"
import Anggota from "../assets/drawer/anggota.svg"
import Simpanan from "../assets/drawer/simpanan.svg"
import Pinjaman from "../assets/drawer/pinjaman.svg"
import ProdukSimpanan from "../assets/drawer/produkSimpanan.svg"
import ProdukPinjaman from "../assets/drawer/produkPinjaman.svg"
import Pengajuan from "../assets/drawer/pengajuan.svg"
import Transaction from "../assets/drawer/transaction.png"

const getIcon = (icons) => {
  switch (icons) {
    case "officer":
      return Officer;
    case "anggota":
      return Anggota;
    case "simpanan":
      return Simpanan;
    case "pinjaman":
      return Pinjaman;
    case "produk-simpanan":
      return ProdukSimpanan;
    case "produk-pinjaman":
      return ProdukPinjaman;
    case "pengajuan":
      return Pengajuan;
    case "transaction":
      return Transaction;
    default:
      return "";
  }
}


const Icons = (props) => {
  const { iconText } = props
  let getIcons = getIcon(iconText);

  return <img src={getIcons} style={{ height: "1.8rem", width: "1.8rem", }} alt={iconText} />
}

export default Icons;