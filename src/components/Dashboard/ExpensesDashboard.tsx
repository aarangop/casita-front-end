interface Expense {
    item: string
    date: string
    amount: number
    tags: string[]
}

const expenses: Expense[] = [
    {
        item: "Mercado semanal",
        date: "2023.07.29",
        amount: 83.00,
        tags: ["mercado", "gastos"]
    },
    {
        item: "Mercado semanal",
        date: "2023.07.19",
        amount: 53.00,
        tags: ["mercado"]
    }
]
export default function ExpensesDashboard() {
    return (
        <div>
            Expenses List

            <div>
                {expenses.map((item, index) =>
                    <div key={`expense-${index}`}>
                        {`${item.item}: ${item.amount}`}
                    </div>
                )}
            </div>
        </div>
    )
}