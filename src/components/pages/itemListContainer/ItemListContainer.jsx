import { Card } from "../../common/card/Card"

export const ItemListContainer = ({ greeting }) => {
    return (
    <div>
        <h1>{greeting}</h1>
        <Card title="Bosque" price={50} stock={5} />
        <Card title="Feria" price={150} stock={3} />
        <Card title="Plantas" price={80} stock={7} />
    </div>
    )
}
