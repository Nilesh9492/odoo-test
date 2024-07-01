import { Button, Input, Select } from "antd";
import React from "react";

const SearchBar = () => {
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
            value: "1",
            label: "All Available",
          },
          {
            value: "2",
            label: "Projector",
          },
          {
            value: "3",
            label: "Sound",
          },
          {
            value: "4",
            label: "Large Screen",
          },
          {
            value: "5",
            label: "Available after 30 min",
          },
        ]}
      />
      <Button className="search-btn">Search</Button>
    </div>
  );
};

export default SearchBar;
