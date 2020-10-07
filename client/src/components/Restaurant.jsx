import React from 'react';
import styled from 'styled-components';
import Rating from './Rating.jsx';
import icons from '../icons.jsx';

const Container = styled.div`
  width: 230px;
  height: 283px;
  flex-shrink: 0;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 218px;
  height: 180px;
  border-radius: 4px;
  pointer-events: none;
  overflow: hidden;
  vertical-align: middle;
`;

const Name = styled.div`
  width: 100%;
  height: 22px;
  text-align: left;
  color: #2b273c;
  font-size: 14px;
  line-height: 22px;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-weight: 700;
  display: flex;
`;

const Height = styled.div`
  height: 7px;
`;

const Reviews = styled.div`
  width: 194px;
  height: 16px;
  display: flex;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #757280;
`;

const Nums = styled.div`
  width: 108px;
  height: 20px;
  display: flex;
  font-size: 14px;
  vertical-align: baseline;
  text-align: left;
  color:  #757280;
  white-space: nowrap;
  padding-left: 7px;
  padding-top: 3.3px;
`;

const Price = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 12px;
  line-height: 32px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Period = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 10px;
  line-height: 18px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const Category = styled.span`
  width: 26.48px;
  height: 17px;
  color: #757280;
  font-weight: 400;
  text-align: left;
  color: #757280;
  font-size: 12px;
  line-height: 18px;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const AddHeight = styled.div`
  height: 2.5px;
`;

const Heart = styled.div`
  fill: rgba(0, 0, 0.2, 0.5);
  height: 20px;
  width: 20px;
  stroke: rgb(225, 225, 225);
  stroke-width: 2.5;
  overflow: visible;
  positon: absolute;
  transform: translate(187px, 22px) scale(.7,.7);

`;

/* ${(props) => props.demo && css`
fill: rgba(22, 0, 0, 0);
`;} */

const Box = styled.div`
  &:hover {
      filter: contrast(65%);
      transition: all .2s ease;
  }
`;

const Restaurant = ({ restaurant }) => {
  return (
    <Container>
      <Box>
        <Heart><svg xmlns="http://www.w3.org/2000/svg"><path d={icons.heartIcon} /></svg></Heart>
        <Image src={restaurant.displayImgURL} />
      </Box>
      <Height />
      <Name>
        {restaurant.name}
      </Name>
      <Reviews>
        <Rating restaurant={restaurant} />
        <Nums>
          {restaurant.reviewsNum}
        </Nums>
      </Reviews>
      <AddHeight />
      <Price>
        {restaurant.price === 1 ? "$ " : restaurant.price === 2 ? "$$ " : "$$$ "}
      </Price>
      <Period>
        {"  •  "}
      </Period>
      <Category>
        {restaurant.category[0]}
      </Category>
    </Container>
  )
};

export default Restaurant;