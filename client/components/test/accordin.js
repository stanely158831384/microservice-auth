import { Accordion } from "flowbite-react";

const accordin = () => {
  return (

    <div className="container mb-4 mx-auto max-w-3xl">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title >
            What is RacoonRepublic?
          </Accordion.Title>

          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              RacoonRepublic is a Toronto based startup company. Current, our business is focusing on three different fields. They are the website development, the outdoor security camera, and the seneca college student forum.
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How to contact us?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Please send emails to:
              <span className="text-amber-800">
                stanzhangjob@gmail.com
              </span>
            </p>

          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Where is the company address?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              As a startup entrepreneur, i cannot afford any toronto housing or rent. So, currently we are living at Toronto Zoo.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>

  )
}

export default accordin;