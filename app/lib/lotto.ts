const getData = async (no: string) => {
    console.info(no);

    const res = await fetch(`http://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${no}`, {
        next: {
            tags: ['nextCount']
        }
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if(!res.ok) {
        // This will activate the closest 'error.js' Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default getData;