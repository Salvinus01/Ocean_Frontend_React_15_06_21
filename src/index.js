import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
    return (
        <div className="card_item">
            <h2>{props.nome}</h2>
            <img src={props.imagem} alt="Imagem da Personagem" width="300" />
        </div>
    );
}

function ListarItens() {
    return (
        <div className="lista_itens">
            <CardItem
                nome="Golum"
                imagem="https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191119040151-860x450.jpg"
            />

            <CardItem
                nome="Frodo"
                imagem="http://pm1.narvii.com/6308/61e613bfde1b95f18e14afda9fa97215cd2ee6e4_00.jpg"
            />

            <CardItem
                nome="Bilbo"
                imagem="https://cdn.vox-cdn.com/thumbor/OnqCOd14_2wyCsgOo5FQe4hJNns=/0x0:3733x1579/1200x675/filters:focal(1499x515:2095x1111)/cdn.vox-cdn.com/uploads/chorus_image/image/68661007/Lord_of_the_Rings_The_Fellowship_of_the_Ring.mkv_snapshot_00.19.38__2020.11.29_18.16.35_.0.png"
            />
        </div> 
    );
}

function App() {
    return <ListarItens />;
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
