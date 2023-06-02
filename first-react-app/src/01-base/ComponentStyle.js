import '../assets/css/componentStyle.css'

const ComponentStyle = () => {
    const message = 'Component Style';
    const style = {
        color: 'red',
    }
    return (
        <div>
            <h1 style={style}>{message}</h1>
            <div className="demo">Style From CSS Module</div>
        </div>
    );
}

export default ComponentStyle;