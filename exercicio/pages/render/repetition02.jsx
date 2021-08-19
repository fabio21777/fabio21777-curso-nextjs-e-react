import listProducts from "../../data/listProducts";
var withBorder ={border: "1px solid #000",}

export default function repetition02(){
    const backgroundThead = {backgroundColor: "gray"}
    return(
        <div>
            <table>
                <thead>
                    <tr style = {backgroundThead}>
                        <th style={withBorder}>Id</th>
                        <th style={withBorder}>Name</th>
                        <th style={withBorder}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderline()}
                </tbody>
            </table>
        </div>
    )
}

function renderline(){
    return listProducts.map(product => {
        return(
            <tr key={product.id} >
                <td style={withBorder}>{product.id}</td>
                <td style={withBorder}>{product.name}</td>
                <td style={withBorder}>{product.price}</td>
                
            </tr>
        )
    })
}