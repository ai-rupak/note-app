import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pastSlice';

const Home = () => {
    const [title , setTitle ] = useState('');
    const [value, setValue] = useState('');
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPaste = useSelector(state => state.paste.pastes);

    useEffect(() => {
        if(pasteId){
            const paste = allPaste.find(paste => paste._id === pasteId);
            setTitle(paste.title);
            setValue(paste.value);
        }        
          
    }, [pasteId])

    function createPaste(){
        const paste = {
            title:title ,
            content:value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        
        
        if(pasteId){
            dispatch(updateToPastes(paste))
        }else{
            dispatch(addToPastes(paste));
        }

        setTitle('');
        setValue('');
        setSearchParams({});
    }
  return (
    <div className=''>
        <div className=' flex items-center justify-center gap-6 mt-20'>
            <input className='bg-black p-2 rounded text-white ' type="text" placeholder='Enter title here'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            
            <button onClick={createPaste} className='bg-purple-600 p-2 text-white rounded'>
                    {pasteId ? "Update My Paste" : "Create New Paste"}
            </button>
        </div>
        <div className='flex flex-row justify-center mt-5'>
            <textarea 
            className='rounded min-w-[500px]  p-4 mt-4 bg-black text-white'
            value={value}
            placeholder="Enter your content"
            onChange={(e)=>setValue(e.target.value)}
            rows={20}
            />
            
        </div>
    </div>
  )
}

export default Home