import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  console.log(query.get("county"), "params");

  const onChange = ({ target: { value, name } }) => {
    console.log(value, name);
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          name="country"
          ref={countryRef}
          placeholder="Country"
        />
        <Input
          defaultValue={query.get("region")}
          onChange={onChange}
          name="region"
          ref={regionRef}
          placeholder="Region"
        />
        <Input
          defaultValue={query.get("city")}
          onChange={onChange}
          name="city"
          ref={cityRef}
          placeholder="City"
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChange={onChange}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizeRef} placeholder="Size" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
    </MenuWrapper>
  );

  // console.log(uzeReplace("address", "toshkent"));

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        overlay={menu}
        trigger="click"
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type="light">
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};
export default Filter;
