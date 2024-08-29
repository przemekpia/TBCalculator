import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { settingsActions } from '../store/settings';
import "flag-icons/css/flag-icons.min.css";

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.settings.selectedLanguage);

    const options = [
        { value: 'PL', label: <span className="fi fi-pl"></span> },
        { value: 'EN', label: <span className="fi fi-gb"></span> },
    ];

    const selectedOption = options.find(option => option.value === selectedLanguage);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black',
            width: '120px',
        }),
        singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        option: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundColor: 'black',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'black',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
    };

    const handleLanguageChange = (selectedOption) => {
        dispatch(settingsActions.setLanguage(selectedOption.value));
    };

    return (
        <Select
            value={selectedOption}
            onChange={handleLanguageChange}
            options={options}
            styles={customStyles}
            isSearchable={false}
        />
    );
};

export default LanguageSelector;
