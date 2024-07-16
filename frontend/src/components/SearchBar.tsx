import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRoomsList } from "../redux/rooms/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>(" ");
  return (
    <div>
      <Select
        showSearch
        mode="multiple"
        style={{ width: 700 }}
        placeholder="Search to Select"
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "All Available",
            label: "All Available",
          },
          {
            value: "Projector",
            label: "Projector",
          },
          {
            value: "Sound",
            label: "Sound",
          },
          {
            value: "Large Screen",
            label: "Large Screen",
          },
          {
            value: "Available after 30 min",
            label: "Available after 30 min",
          },
        ]}
        onChange={(e: any) => setSearchValue(e.join(" "))}
      />
      <Button
        className="search-btn"
        onClick={() => dispatch(getRoomsList({ search: searchValue }))}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
