import { Dropdown } from 'react-bootstrap'; // Importujemy komponent Dropdown

const TableHeader = ({ onSortUser, onSortTitle, onSortComments }) => {
    return (
        <thead>
            
            <tr>
                <th>
                    <tr>
                        <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-user-sort">
                            Sort By User Name
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => onSortUser('asc')}>Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortUser('desc')}>Descending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortUser(null)}>Natural Order</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </td>
                    </tr>
                </th>
                <th>
                    <tr> 
                        <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-title-sort">
                            Sort By Title
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => onSortTitle('asc')}>Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortTitle('desc')}>Descending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortTitle(null)}>Natural Order</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </td>
                    </tr>
                </th>
                <th>
                    <td>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-comments-sort">
                            Sort By Comments
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => onSortComments('asc')}>Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortComments('desc')}>Descending</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSortComments(null)}>Natural Order</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </td>
                </th>
            </tr>

            
           
        </thead>
    );
};

export default TableHeader;
