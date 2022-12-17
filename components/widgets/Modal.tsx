interface ModalProps{
    isOpen:boolean,
    closeModal:any,
    children:JSX.Element
    [key:string]:any
}

export default function FullScreenModal({isOpen,children,closeModal}:ModalProps){
    return(
      <div  className={`bg-white z-50 fixed top-0 left-0 transition-all h-full w-full tr ${isOpen?"scale-100":"scale-0"}`}>
        <button className="absolute top-5 right-10 rounded-full border-2 border-black  h-8 w-8" onClick={closeModal}>
            <i className="bi bi-x-lg"></i>
        </button>
       {children}
      </div>
    )
}