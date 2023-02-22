import { Table } from "flowbite-react";
import GeneralModal from "../../generalModal/generalModal";
import { useRecoilState } from "recoil";
import { profileModalState } from "../../../../atom/profileModalAtom";
import { passwordModalState } from "../../../../atom/passwordModalAtom";
import { generalModalState } from "../../../../atom/generalModalAtom";
const userProfileTable = (props) => {
  const [openProfileModal, setOpenProfileModal] =
    useRecoilState(profileModalState);
  const [openPasswordModal, setOpenPasswordModal] =
    useRecoilState(passwordModalState);

  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>Detail</Table.HeadCell>
          <Table.HeadCell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setOpenProfileModal(true);
              }}
            >
              Edit
            </a>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Email
            </Table.Cell>
            <Table.Cell>{props.data.user.email}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Username
            </Table.Cell>
            <Table.Cell>{props.data.user.username}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Address
            </Table.Cell>
            <Table.Cell>{props.data.user.address}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Phone
            </Table.Cell>
            <Table.Cell>{props.data.user.phone}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <a
        href="#"
        className="text-center font-cyberFonts px-8 py-2 my-4 text-white bg-red-300 border-b-4 border-b-red-400 rounded-lg shadow-md hover:bg-red-500 hover:border-t-6 hover:border-b-0 transition-all duration-100 block"
        onClick={(e) => {
          e.preventDefault();
          setOpenPasswordModal(true);
        }}
      >
        Change your password
      </a>
    </div>
  );
};

export default userProfileTable;
