import { FilterInput, FilterLabel, FilterContainer } from "./Filter.styled"
import PropTypes from 'prop-types';


export function Filter({ onChange, value }) {

    return (
        <FilterContainer>
            <FilterLabel htmlFor="filterId">Find contacts by name: </FilterLabel>
            <FilterInput type="text" name="filter" id="filterId" value={value} onChange={onChange} required/>
        </FilterContainer>
        )
    }
   
Filter.propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }