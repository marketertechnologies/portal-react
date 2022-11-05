import Image from "next/image";
import Link from "next/link";
import { Contact } from "../../types/project";

const Contacts = ({
    contacts
}: {
    contacts: Contact[]
}): JSX.Element => {


    return (
        <div className="w-full flex justify-center px-8" id="contact">
            <div className="w-full max-w-[1440px] flex flex-col gap-4">
                <div className="w-full flex flex-col md:flex-row  gap-8 justify-between">
                    <div className="md:w-[30%]">
                        <h2 className="text-2xl md:text-3xl">Kontakt</h2>
                    </div>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 flex-1 gap-8">
                        {contacts?.map((contact, i) => (
                            <li className="w-full" key={i}>
                                {contact.image && <div className="aspect-square w-full relative"><Image className="object-cover" layout="fill" alt="" src={contact.image} /></div>}
                                {contact.name && <h5 className="text-lg md:text-xl mt-4">{contact.name}</h5>}
                                {contact.title && <div>{contact.title}</div>}
                                {contact.email && <Link href={`mailto:${contact.email}`} passHref><a className="border border-[#ccc] hover:border-black rounded-full py-2 px-4 inline-flex w-fit mt-4">Kontakt meg</a></Link>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contacts;