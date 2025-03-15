function Layout(props){
    return(
        <div
        style={{
            // maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: "block"
        }}
        id="layout"
        >
            {
                props.children
            }
        </div>
    )
}

export default Layout;