import { useMediaQuery } from "beautiful-react-hooks";

function HoverCard(props) {
  const isMobile = useMediaQuery("(min-width: 640px)");
  return (
    <div>
      {isMobile ? (
        <div className="m-2">
          <div
            id="parent"
            className="flex w-full flex-col justify-center text-center border border-yellow-100 p-6 hover:bg-yellow-100 rounded hover:text-heading"
          >
            <img src="/placeholder-iocn.svg" className="mb-4"></img>
            <h4
              id="heading"
              className="text-base font-heading text-white font-medium antialiased mb-1"
            >
              {props.title}
            </h4>
            <p
              id="paragraph"
              className="text-sm font-body text-gray-200 font-normal antialiased"
            >
              {props.description}
            </p>
          </div>
          <style jsx>{`
            #parent:hover #heading {
              color: #1a202c;
            }
            #parent:hover #paragraph {
              color: #2d3748;
            }
          `}</style>
        </div>
      ) : (
        <div>
          <div className="flex w-full flex-row items-start mb-6">
            <img src="/placeholder-iocn.svg" className="mr-3"></img>
            <div>
              <h4 className="text-lg md:text-base font-heading text-white font-medium antialiased mb-1">
                {props.title}
              </h4>
              <p className="text-base md:text-sm font-body text-gray-200 font-normal antialiased">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HoverCard;
