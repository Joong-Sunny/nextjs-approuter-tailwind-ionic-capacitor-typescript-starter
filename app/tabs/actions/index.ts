'use server';

export async function getNotificationInformation() {
  console.log('This message will show up in server');

  return getNotificationStatusFromDB();
}

const getNotificationStatusFromDB = async () => {
  // logic here:  fetching some data from DB
  console.log('successfully fetched data from DB');

  return true;
};
