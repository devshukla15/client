import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core'


const CreatePostButton = () => {

    return (
        <div >

            <Fab component={Link} to="/CreatePost" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>

        </div>

    )
}

export default CreatePostButton
