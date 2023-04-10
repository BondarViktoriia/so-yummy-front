import { Block, BlockText, BlockLink } from './MainPage'
// import { FaBeer  } from  'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";

export const HealsyBlockRec = () => {
    return (
        <Block>
            <BlockText>
                <span>Delicious and healthy</span>Delicious and healthy way to enjoy a variety of fresh ingredients in one satisfying meal
            </BlockText>
            <BlockLink to="/categories/Breakfast"><span>See recipes</span><BsArrowRight/></BlockLink>
        </Block>
    )
}