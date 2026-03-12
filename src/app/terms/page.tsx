export default function Terms() {
    return (
        <main className="min-h-screen pt-40 pb-32 text-[#FBFBFB] bg-[#0A192F]">
            <div className="max-w-4xl mx-auto px-6 md:px-12 bg-white/5 border border-white/10 p-12 rounded-[2rem] shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Terms & Conditions</h1>
                
                <div className="space-y-8 text-[#FBFBFB]/70 leading-relaxed font-medium">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Services</h2>
                        <p>
                            SolisPark Energy ("SolisPark", "We", "Our", "Us") acts as an extensive EPC contractor and lifecycle manager for utility and commercial scale solar infrastructure. The provision of our services, including land acquisition, grid integration, and sustained maintenance, is strictly governed by individually signed Power Purchase Agreements (PPAs) or direct EPC contracts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Financial Structures</h2>
                        <p className="mb-4">
                            <strong>2.1 BOOT / OPEX Model:</strong> Under the Zero-CapEx BOOT framework, SolisPark retains 100% legal ownership of the physical asset while it is deployed on the client's premises, until explicitly transferred at the end of the contracted term. The client is legally obligated to procure the generated energy at the agreed-upon flat tariff.
                        </p>
                        <p>
                            <strong>2.2 CAPEX Model:</strong> In the event of direct procurement, total asset ownership vests with the client upon complete realization of final milestone payments. Accelerated depreciation benefits are the sole responsibility of the client's accounting framework.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Warranties and Limitation of Liability</h2>
                        <p>
                            We warrant the structural and technical execution of our projects for industry-standard defect periods. However, the core 30-year replacement warranty on N-Type TOPCon cells and associated inverters flows directly from our Tier-1 Original Equipment Manufacturers (OEMs), specifically Axitec and Sungrow. SolisPark acts as a facilitator and does not directly assume the balance sheet liability for OEM hardware defects outside standard clauses.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                        <p>
                            All disputes, disputes, and legal ambiguities arising directly or indirectly from our infrastructure deployments shall be governed extensively under the jurisdiction of the honorable courts situated in Bengaluru, Karnataka, India.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
