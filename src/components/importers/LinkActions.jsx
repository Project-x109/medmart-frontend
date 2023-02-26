import { useState } from 'react';
import { Link } from 'react-router-dom';
import OpenInNew from '@mui/icons-material/OpenInNew';

const LinkActions = ({ id, deleteHandler, name, editRoute }) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="flex justify-between gap-2">
                {editRoute !== "review" && (
                    <Link to={`/admin/${editRoute}/${id}`} className="text-blue-600 hover:bg-blue-200 p-1 rounded-full bg-blue-100">
                        <OpenInNew />
                    </Link>
                )}
             
            </div>

          
        </>
    );
};

export default LinkActions;
