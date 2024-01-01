import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const FilterContainer =styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
`;
const Filter =styled.div`
display:flex;
align-items:center;
`;
const FilterTitle =styled.span`
font-size:20px;
font-weight:200;
`;
const FilterColor =styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;
const FilterSize =styled.select`
margin-left:10px;
padding:5px;

`;
const FilterSizeOption =styled.option``;
const AddContainer =styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount =styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button =styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
    background-color:#f8f4f4;
}
`;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image
            src="https://img.freepik.com/free-photo/portrait-handsome-young-businessman_158595-257.jpg?w=740&t=st=1704079850~exp=1704080450~hmac=9afb536d166398478402e2fc00b409117c3d2e61eda9c38e79180eff4c649460"
            alt="Product Image"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>USPA Shirt</Title>
          <Desc>USPA Shirt: A tailored fit, premium quality shirt designed for men's style and comfort, exuding sophistication and timeless elegance</Desc>
          <Price>Rs.1200</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="grey"/>
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
   <FilterSize>
    <FilterSizeOption>Xs</FilterSizeOption>
    <FilterSizeOption>s</FilterSizeOption>
    <FilterSizeOption>M</FilterSizeOption>
    <FilterSizeOption>L</FilterSizeOption>
    <FilterSizeOption>Xl</FilterSizeOption>

   </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
            <RemoveCircleOutlineIcon/>
          <Amount>1</Amount>
          <AddCircleOutlineIcon/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
