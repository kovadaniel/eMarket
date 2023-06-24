function Tab({page, i, makeTab, index, setIndex}) {
    return (
        <div onClick={() => setIndex(i)} className={`tab ${i === index ? ' active' : ''}`}>
            {makeTab(page, i)}
        </div>
    );
}

export default Tab;