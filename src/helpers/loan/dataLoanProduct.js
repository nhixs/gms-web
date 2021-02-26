const dataLoanProduct =
{
    "success": true,
    "message": "List of Loan Products",
    "data": {
        "loanProd": [
            {
                "id": 1,
                "name": "Pinjaman Mobil",
                "prefix": "BGS",
                "description": "Ini pinjaman mobil In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
                "interest_rate": 6,
                "interest_calculation": "flat",
                "compound": "daily",
                "posting": "yearly",
                "digit_after_decimal": 6,
                "in_multiple_of": "100",
                "lock_in_value": 2,
                "lock_in_period": "monthly",
                "tax": "pph 23",
                "day_in_month": "30",
                "theme_color": "83F9A4",
                "created_by": "GPR-2-0001",
                "created_at": "2021-02-02T20:13:35.000Z",
                "updated_at": "2021-02-02T20:13:35.000Z",
                "id_loan_prod": "PA-01-0001",
                "with_collateral": 1,
                "days_in_year": "365"
            },
            {
                "id": 2,
                "name": "Pinjaman Rumah",
                "prefix": "BGS",
                "description": "ini pinjaman rumah In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
                "interest_rate": 6,
                "interest_calculation": "flat",
                "compound": "daily",
                "posting": "yearly",
                "digit_after_decimal": 6,
                "in_multiple_of": "100",
                "lock_in_value": 2,
                "lock_in_period": "monthly",
                "tax": "pph 21",
                "day_in_month": "30",
                "theme_color": "494949",
                "created_by": "GPR-2-0001",
                "created_at": "2021-02-02T20:13:35.000Z",
                "updated_at": "2021-02-02T20:13:35.000Z",
                "id_loan_prod": "PA-01-0002",
                "with_collateral": 1,
                "days_in_year": "365"
            }
        ]
    },
    "options": {
        "pageInfo": {
            "page": 1,
            "totalPage": 2,
            "perPage": 3,
            "totalData": 6,
            "nextLink": "http://192.168.100.7:6464/product?limit=3&page=2&search=&sort=asc&type=loan",
            "prevLink": null
        }
    }
}

export default dataLoanProduct;