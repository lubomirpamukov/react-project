
function Panel({children, className, ...rest}){
    
    const finalClassName = `border rounded p-3 shadow bg-white w-full ${className}`;

    return <div {...rest} className={finalClassName}>{children}</div>
}

export default Panel;