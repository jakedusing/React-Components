import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success rounded>Click me</Button>
            </div>
            <div>
                <Button danger>Buy Now</Button>
            </div>
            <div>
                <Button warning outline>Hide Ads</Button>
            </div>
            <div>
                <Button secondary>Pee</Button>
            </div>
            <div>
                <Button primary outline>Poo</Button>
            </div>
        </div>
    );
}

export default App;