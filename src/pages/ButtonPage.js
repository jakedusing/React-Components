import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {

    return (
        <div>
            <div>
                <Button success rounded className="mb-5">
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoCloudDownload />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button warning outline>
                    <GoDatabase />
                    Hide Ads
                </Button>
            </div>
            <div>
                <Button secondary>
                    Circle
                </Button>
            </div>
            <div>
                <Button primary outline>
                    Square
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;