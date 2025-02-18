type RandomNumberType = {
    value: number,

}
type isPositive = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never

}
type isNegative = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never

}
type isZero = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never
}
type RandomNumberProps = isPositive | isNegative | isZero

function Restrictions({ value, isPositive, isNegative, isZero }: RandomNumberProps) {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'isNegative'} {isZero && 'zero'}
        </div>
    )
}

export default Restrictions