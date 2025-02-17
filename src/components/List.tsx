
type ListType<T> = {
    items: T[],
    onClick: (value: T) => void
}

const List = <T extends {}>({ items, onClick }: ListType<T>) => {
    return (
        <div>
            List:
            {
                items.map((item, index) => <div key={index} onClick={() => onClick(item)}>{JSON.stringify(item)}</div>)


            }

        </div>
    )
}

export default List