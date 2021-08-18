export default function list() {
    return (
        <div>
            <h1>{generateList()}</h1>
        </div>
    )
}
function generateList(length=10) {
    const list = []
    for (let i = 0; i <= length; i++) {
        list.push(
            <span>{i},</span>
        )    
    }
    return list
}