import './Wrapper.css';
import { Children } from "react";

function Wrapper({ children }) {
    let childrenArray = Children.toArray(children);
    let first = childrenArray.slice(0, childrenArray.length / 2);
    let second = childrenArray.slice(childrenArray.length / 2, childrenArray.length);
    return (
        <section>
            <div class="block">
                <div class="marquees">
                    <div>
                        {first}
                    </div>
                    <div>
                        {second}
                    </div>
                </div>
            </div>
        </section >
    );
}
export default Wrapper;
