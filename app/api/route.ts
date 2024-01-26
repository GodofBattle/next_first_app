export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    console.info(request);

    const res = await fetch('http://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=100', {
        headers: {
            'Content-Type': 'application/json'
        },
        next: {
            revalidate: 60
        }
    });

    const data = await res.json();

    return Response.json({ data });
}