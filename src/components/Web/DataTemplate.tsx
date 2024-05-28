import React from "react";
interface IData {
  name: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
  paragraph7?: string;
  paragraph8?: string;
  paragraphbox1?: string;
  paragraphbox2?: string;
  listedItems?: (string | number)[];
  stListedItems?: { title: string; paragraph: string }[];
  linkListedItems?: { name: string; url: string }[];
  paragraph11?: string;
  paragraph12?: string;
  paragraph13?: string;
  paragraph14?: string;
  listedItems2?: (string | number)[];
  nestedList?: { text: string; others: (string | number)[] }[];
  listedItemsRom?: (string | number | undefined)[];
  tableHead?: string[];
  tableList?: (string | number | undefined)[][];
}

interface IDataTemplateProps {
  data: IData;
}

const DataTemplate: React.FC<IDataTemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col  gap-y-[12px]">
      <h3
        className="text-[32px] 
      font-bold text-[#13161D] font-secondary"
      >
        {data.name}
      </h3>
      {/* First Paragraph */}

      <div className="flex flex-col gap-y-[10px] text-justify">
        {data?.paragraph1 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph1 || ""}</p>}
        {data?.paragraph2 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph2 || ""}</p>}
        {data?.paragraph3 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph3 || ""}</p>}
        {data?.paragraph4 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph4 || ""}</p>}
        {data?.paragraph5 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph5 || ""}</p>}
        {data?.paragraph6 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph6 || ""}</p>}
        {data?.paragraph7 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph7 || ""}</p>}
        {data?.paragraph8 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph8 || ""}</p>}
        {/* box paragraph */}
        {data?.paragraphbox1 && (
          <p className="text-[16px] text-[13161D] border p-3 font-[450]">{data?.paragraphbox1 || ""}</p>
        )}
        {data?.paragraphbox2 && (
          <p className="text-[16px] text-[13161D] border p-3 font-[450]">{data?.paragraphbox2 || ""}</p>
        )}

        {/* First list */}

        {data?.listedItems && (
          <ul
            className="list-disc 
           px-[30px]
           flex flex-col gap-y-[10px]"
          >
            {data.listedItems.map((data: string | number, i: number) => (
              <li className="text-[16px] leading-[32px]" key={i}>
                {data}
              </li>
            ))}
          </ul>
        )}
        {/* structured list */}

        {data?.stListedItems && (
          <ol
            className="list-decimal 
           px-[30px]
           flex flex-col gap-y-[10px]"
          >
            {data.stListedItems.map((data: { title: string; paragraph: string }, index: number) => (
              <li className="text-[16px] leading-[32px]" key={index}>
                <span className="font-[600]">{data.title} </span>
                {data.paragraph}
              </li>
            ))}
          </ol>
        )}
        {/* linked list */}

        {data?.linkListedItems && (
          <ul
            className="list-disc 
           px-[30px]
           flex flex-col gap-y-[10px]"
          >
            {data.linkListedItems.map((data: { name: string; url: string }) => (
              <li className="text-[16px] leading-[32px]" key={data.url}>
                <a href={data.url} className="text-sky-600">
                  {data.name}{" "}
                </a>
              </li>
            ))}
          </ul>
        )}
        {/* Second Paragraph */}

        {data?.paragraph11 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph11 || ""}</p>}
        {data?.paragraph12 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph12 || ""}</p>}
        {data?.paragraph13 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph13 || ""}</p>}
        {data?.paragraph14 && <p className="text-[16px] text-[13161D] font-[450]">{data?.paragraph14 || ""}</p>}
        {/*second list */}
        {data?.listedItems2 && (
          <ul
            className="list-disc 
           px-[30px]
           flex flex-col gap-y-[10px]"
          >
            {data.listedItems2.map((data: string | number) => (
              <li className="text-[16px] leading-[32px]" key={data}>
                {data}
              </li>
            ))}
          </ul>
        )}
        {/* Nestes paragraph */}

        {data?.nestedList && (
          <ul className="list-disc px-[20px] flex flex-col gap-y-[10px]">
            {data.nestedList.map((item, i) => (
              <React.Fragment key={i}>
                <li className="text-[16px] leading-[32px]">{item.text}</li>
                {item.others &&
                  item.others.map((other, j) => (
                    <li className="text-[16px] ml-[20px] leading-[32px]" key={j}>
                      {other}
                    </li>
                  ))}
              </React.Fragment>
            ))}
          </ul>
        )}

        {/*Roman list */}
        {data?.listedItemsRom && (
          <ul
            className="list-disc 
           px-[30px]
           flex flex-col gap-y-[10px]"
          >
            {data.listedItemsRom.map((data: string | number | undefined, i: number) => (
              <li className="text-[16px] leading-[32px]" key={i}>
                {data}
              </li>
            ))}
          </ul>
        )}
        {/* Table list */}
        {data.tableHead && data.tableList && (
          <table>
            <thead>
              <tr className="text-left">
                {data.tableHead.map((headItem, i) => (
                  <td className="border p-2 font-[600]" key={i}>
                    {headItem}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.tableList.map((row, i) => (
                <tr className="text-left" key={i}>
                  {row.map((cell, j) => (
                    <td className="border p-2" key={j}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DataTemplate;
