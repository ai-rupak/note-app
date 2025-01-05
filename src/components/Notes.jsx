import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pastSlice';
import toast from 'react-hot-toast';

const Notes = () => {
    const pastes = useSelector(state => state.paste.pastes);

    const [searchItem , setSearchItem] = useState('');

    const dispatch = useDispatch();

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId));
    }
  return (

    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-3xl m-5'>Notes</h1>

        <input className='bg-black text-white p-2 rounded min-w-[600px]'
        type='search'
        placeholder='Search for a note'
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        />
        <div className='min-w-[700px] mt-10'>
            {filteredData.length > 0 &&

            filteredData.map((paste) => {
                return (
                <div key={paste?._id} className='border'>
                    <div>
                        <h2>{paste.title}</h2>
                    </div>
                    <div>
                        <h2>{paste.content}</h2>
                    </div>
                    <div className='flex flex-row gap-6 justify-end p-3 px-5'>
                        <button>
                            <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                            
                        </button>
                        <button>
                            <a href={`/pastes/${paste?._id}`}>View</a>
                        </button>
                        <button onClick={()=> handleDelete(paste?._id)}>Delete</button>
                        <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
                            toast.success("Copied to Clipboard")
                        }}>Copy</button>
                    </div>
                    <div>
                        {paste.createdAt}
                    </div>
                </div>
                );
            })}

               
        </div>
    </div>
  )
}

export default Notes