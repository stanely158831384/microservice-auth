import buildClient from "../api/build-client"
import Link from 'next/link';

const LandingPage = ({currentUser, tickets}) => {
    console.log('mode: ',process.env.NODE_ENV);
    const ticketList = tickets.map(ticket =>{
        return (
            <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.price}</td>
                <td>{ticket.orderId}</td>
                <td>
                    <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                        <a>View1</a>
                    </Link>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <h2>tickets</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Link</th>
                        <th>orderId</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketList}
                </tbody>
            </table>
        </div>
    );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
    // console.log('Landing page');
    // const client = buildClient(context);
    // const {data} = await client.get('/api/users/currentuser');
    // console.log(data);
    // return data;

    const { data} = await client.get('/api/tickets');

    return { tickets: data};
}

export default LandingPage;