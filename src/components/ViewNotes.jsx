import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updatePastes } from '../redux/pastSlice';

const ViewNotes = () => {
    const {id } = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);

    const paste = allPastes.filter((p)=> p._id === id)[0];
  return (
    <div className=''>
        <div className=' flex items-center justify-center gap-6 mt-20'>
            <input className='bg-black p-2 rounded text-white ' type="text" placeholder='Enter title here'
            value={paste?.title} disabled
            onChange={(e)=>setTitle(e.target.value)}
            />
            
            {/* <button onClick={createPaste} className='bg-purple-600 p-2 text-white rounded'>
                    {pasteId ? "Update My Paste" : "Create New Paste"}
            </button> */}
        </div>
        <div className='flex flex-row justify-center mt-5'>
            <textarea 
            className='rounded min-w-[500px]  p-4 mt-4 bg-black text-white'
            value={paste?.value} disabled
            placeholder="Enter your content"
            onChange={(e)=>setValue(e.target.value)}
            rows={20}
            />
            
        </div>
    </div>
  )
}

export default ViewNotes