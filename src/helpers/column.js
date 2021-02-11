
const Columns = [
  {
    title: "Management",
    columns: [
      {
        title: "officer",
        sub: [
          {
            label: "list officer",
            path: "/officer/list"
          },
          {
            label: "tambah officer",
            path: "/officer/new"
          }
        ]
      },
      {
        title: "anggota",
        sub: [
          {
            label: "list anggota",
            path: "/client/list"
          },
          {
            label: "tambah anggota",
            path: "/client/new"
          }
        ]
      },
      {
        title: "simpanan",
        sub: [
          {
            label: "daftar simpanan",
            path: "/deposit/list"
          }
        ]
      },
      {
        title: "pinjaman",
        sub: [
          {
            label: "daftar pinjaman",
            path: "/loan/list"
          }
        ]
      },
    ]
  },
  {
    title: "operational",
    columns: [
      {
        title: "produk-simpanan",
        sub: [
          {
            label: 'list produk simpnanan',
            path: "/product/deposit/list"
          },
          {
            label: 'tambah produk simpanan',
            path: "/product/deposit/new"
          }
        ]
      },
      {
        title: "produk-pinjaman",
        sub: [
          {
            label: 'list produk pinjaman',
            path: "/product/loan/list"
          },
          {
            label: 'tambah produk pinjaman',
            path: "/product/loan/new"
          }
        ]
      },
      {
        title: "pengajuan",
        sub: [
          {
            label: 'pengajuan simpanan',
            path: "/deposit/apply"
          },
          {
            label: 'pengajuan pinjaman',
            path: "/loan/apply"
          }
        ]
      },
    ]
  },
  {
    title: 'accounting',
    columns: [
      {
        title: 'transaction',
        sub: [
          {
            label: 'list transaksi',
            path: '/transaction/list'
          },
          {
            label: 'tambah tansaksi',
            path: '/transaction/list'
          }
        ]
      }
    ]
  }
]

export default Columns