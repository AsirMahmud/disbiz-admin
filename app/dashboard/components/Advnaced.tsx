import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import Bullet from "./Bullet";

export default function Advnaced() {
  const data = [
    {
      name: "Module-Lattice-Based Key-Encapsulation Mechanism Standard FIPS 203 (formerly Kyber) and Saber",
      description:
        "These key encapsulation mechanisms, built on the foundations of Learning With Errors (LWE) and Learning With Rounding (LWR), offer efficient and scalable encryption. As a NIST-approved standard, Module-Lattice-Based Key-Encapsulation Mechanism Standard FIPS 203 ensures our solutions meet the highest security benchmarks, while Saber, a near-term NIST PQC standard, is expected to play a crucial role in the future of post-quantum cryptography.",
    },
    {
      name: "Module-Lattice-Based Digital Signature Standard FIPS 204 (formerly CRYSTALS-Dilithium)",
      description:
        "As a premier lattice-based digital signature standard, this scheme delivers strong authentication, guaranteeing the integrity and authenticity of communications.",
    },
    {
      name: "McEliece Public-Key Cryptosystem",
      description:
        "Known for its resilience against quantum attacks, McEliece is based on error-correcting codes rather than mathematical problems like factoring or discrete logarithms. This scheme uses randomly generated linear codes and a trapdoor permutation, making it difficult for adversaries to decode messages without the secret key. Although historically less efficient, ongoing research aims to optimize McEliece for practical use in secure communication and data protection as quantum computing evolves.",
    },
    {
      name: "Learning With Errors Identity-Based Encryption (LWE IBE)",
      description:
        "This cryptographic scheme derives public keys from unique identifiers or a combination of identifiers, such as email addresses, serial numbers, IP addresses, and other distinctive attributes. This approach simplifies key management by allowing users/things to generate their own public keys based on these identifiers, eliminating the need for a centralized certificate authority. The system enhances security by tying encryption to a specific identifier, providing robust protection against unauthorized access. By avoiding complex key exchanges and central management, LWE IBE streamlines the encryption process, making it more efficient and user-friendly.",
    },
  ];
  return (
    <>
      {" "}
      <div className="flex justify-center flex-col-reverse lg:flex-row gap-8">
        <div className=" w-full">
          {" "}
          <h1 className=" lg:text-4xl text-3xl ">
            Advanced Post-Quantum Cryptographic Solutions
          </h1>
          <hr className="w-[50%] h-2  my-4 grad  border-0 rounded"></hr>
          <p>
            At QubitShield, we leverage a wide array of cryptographic schemes to
            ensure our solutions remain robust against the quantum threat.
            Integral elements of our approach include:
          </p>
          <div>
            <div className="flex dashboard flex-col-reverse lg:flex-row  justify-between items-center w-full  gap-8">
              <div className="lg:w-[80%] w-full flex flex-col  ">
                {" "}
                {data.slice(0, 3).map((i) => (
                  <p className="">
                    <b>
                      <Bullet></Bullet>
                      {i.name}:
                    </b>

                    <span> {i.description}</span>
                  </p>
                ))}
              </div>
              <div className="lg:w-1/2 w-full  overflow-hidden flex h-auto justify-center">
                <Image
                  src="/3.png"
                  width={500}
                  height={500}
                  alt="1"
                  className="w-[400px] h-[400px] object-cover"
                ></Image>
              </div>
            </div>
            <p className="text-xl ">
              <b className="">
                <Bullet></Bullet>
                {data[3].name}:
              </b>
              <span className=""> {data[3].description}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
