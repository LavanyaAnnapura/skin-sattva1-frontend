export const serviceCategories = [
  { key: "skin", label: "Skin", image: "/images/service-skin.png" },
  { key: "hair", label: "Hair", image: "/images/service-hair.png" },
  { key: "aesthetics", label: "Aesthetics", image: "/images/service-aesthetics.png" },
  { key: "dermatosurgery", label: "Dermatosurgery", image: "/images/service-dermatosurgery.png" },
];

const allServices = [
  {
    slug: "acne-control-therapy",
    title: "Acne Control Treatment",
    category: "skin",
    shortDescription: "Holistic acne treatment with peels, IPL, and personalized skincare plans.",
    content: {
      overview:
        "Acne is a common skin disorder affecting males and females, most frequently between the ages of 15 and 30, though it can appear at any age. When left untreated, acne leads to persistent marks, pigmentation, and scars that become increasingly difficult to treat over time. At Skin Sattva, we take a comprehensive, dermatologist-led approach to control active acne, prevent scarring, and restore clear, healthy skin.",
      sections: [
        {
          heading: "What is Acne (Pimples)?",
          body: "Acne mainly appears on the face, followed by the chest, back, and arms. It occurs due to increased oil (sebum) secretion and blocking of pores by oil and dead skin cells under hormonal influence. Multiple triggers — including stress, diet, hormonal fluctuations, certain cosmetics, and environmental factors — can aggravate acne. The condition ranges from mild comedonal acne (blackheads and whiteheads) to severe inflammatory and cystic acne.",
        },
        {
          heading: "How is Acne Treated at Skin Sattva?",
          body: "With current advances in dermatology, acne can be safely and effectively treated using a combination of topical medications, oral therapies, and in-clinic procedures. Modern chemical peel solutions help reduce redness, active lesions, and post-acne marks. Red light phototherapy and Intense Pulsed Light (IPL) reduce bacterial load and acne severity within just a few sessions. Every treatment plan is customized after thorough assessment of acne type, severity, skin type, and lifestyle factors.",
        },
        {
          heading: "Our Treatment Protocol",
          body: "After detailed consultation, our dermatologists recommend a customized plan combining topical care, oral medications, and procedural interventions. The protocol typically includes medical-grade chemical peels and Intense Pulsed Light (IPL) therapy over 6–8 sessions based on severity. Lifestyle, diet, and skincare guidance are integrated to reduce recurrence. Treatments have minimal to no downtime, with each session usually taking 30–40 minutes.",
        },
        {
          heading: "Who Can Get This Treatment?",
          body: "Anyone experiencing stubborn pimples or acne that tends to leave behind marks, pigmentation, or scars can benefit from this treatment. It is suitable for teenagers and adults with mild, moderate, or severe acne. A clinical assessment helps determine the most effective treatment approach for your specific condition.",
        },
        {
          heading: "Why Skin Sattva for Acne Treatment?",
          body: "Skin Sattva combines advanced technology, evidence-based protocols, and personalized care to deliver reliable acne control outcomes. Our dermatologists focus on treating the root cause — not just symptoms — with minimal disruption to your daily routine. We use only FDA-approved treatments and medical-grade products, ensuring safety and efficacy at every step.",
        },
        {
          heading: "Frequently Asked Questions",
          body: null,
        },
      ],
      benefits: [
        "Faster active acne control",
        "Reduces post-acne marks and pigmentation",
        "Improves overall skin tone and texture",
        "Safe, evidence-based protocols",
        "Minimal to no downtime",
        "Personalized treatment planning",
      ],
      supportImage: "/images/service-detail/acne-support.jpg",
      faqs: [
        { q: "How many sessions are needed?", a: "Session count varies based on acne severity, skin type, and response to treatment. Typically 6–8 sessions are recommended, evaluated after initial assessment." },
        { q: "Is there any downtime?", a: "Most protocols involve little to minimal downtime. Chemical peels may cause mild peeling for 2–3 days, while IPL sessions allow you to resume daily activities immediately." },
        { q: "When will I see results?", a: "Early improvements may appear within the first 2–3 sessions. Full outcomes — including mark reduction and texture improvement — progress over the complete treatment course with follow-up care." },
        { q: "Can acne come back after treatment?", a: "Recurrence depends on triggers like hormones, stress, and skincare habits. Our protocol includes maintenance guidance and lifestyle modifications to minimize recurrence." },
        { q: "Is the treatment painful?", a: "Treatments are generally well-tolerated. Chemical peels may cause a mild tingling sensation, and IPL feels like a light snap. No anaesthesia is required for most procedures." },
      ],
      beforeAfterImages: [
        { src: "/images/service-detail/acne-ba-1.png", alt: "Acne treatment before and after result 1" },
        { src: "/images/service-detail/acne-ba-2.png", alt: "Acne treatment before and after result 2" },
        { src: "/images/service-detail/acne-ba-3.png", alt: "Acne treatment before and after result 3" },
        { src: "/images/service-detail/acne-ba-4.png", alt: "Acne treatment before and after result 4" },
      ],
    },
  },
  {
    slug: "psoriasis",
    title: "Psoriasis",
    category: "skin",
    shortDescription: "NBUVB-based management to control disease and reduce recurrences.",
    content: {
      overview:
        "Psoriasis is a chronic skin condition that presents as red scaly patches on scalp, arms, legs and back. The exact cause of it is not known. However, there are newer treatments available in modern medicine which will keep the disease under control and prevent recurrences.",
      sections: [
        {
          heading: "How We Treat Psoriasis",
          body: "At Skin Sattva, we treat Psoriasis with a combination of topical creams, oral medications and NBUVB therapy. This newer treatment is devoid of side effects and can control the disease within few weeks. It is best suited for psoriasis that has affected large body parts.",
        },
        {
          heading: "Our NBUVB Protocol",
          body: "Skin Sattva has the latest Speigel series NBUVB therapy for psoriasis. One has to visit the centre every week for up to 12-16 weeks to see complete remission or cure. Regular follow-ups are required to keep the disease under control.",
        },
        {
          heading: "Lifestyle Support",
          body: "Lifestyle lessons and dietary advice will be provided to all those who visit our centre. This holistic approach helps reduce flare-ups and improve long-term disease management.",
        },
      ],
      benefits: ["Controls flare-ups effectively", "Reduces recurrence", "Suitable for large body involvement", "Lower side-effect profile", "Latest Speigel series NBUVB", "Dietary and lifestyle guidance"],
      supportImage: "/images/service-detail/psoriasis-support.jpg",
      faqs: [
        { q: "How long does psoriasis treatment take?", a: "Patients typically need to visit weekly for 12-16 weeks to see complete remission or significant improvement. Regular follow-ups are essential for long-term control." },
        { q: "Is NBUVB therapy safe?", a: "Yes, NBUVB is a well-established, safe phototherapy method with minimal side effects when administered under dermatologist supervision." },
        { q: "Can psoriasis be cured permanently?", a: "Psoriasis is a chronic condition, but with proper treatment and lifestyle modifications, it can be effectively controlled with long remission periods." },
      ],
    },
  },
  {
    slug: "vitiligo",
    title: "Vitiligo",
    category: "skin",
    shortDescription: "FDA-approved NBUVB and Excimer phototherapy for repigmentation support.",
    content: {
      overview:
        "Vitiligo is a condition where the skin loses its color, causing white patches. It can affect anyone, but it often has a bigger impact on people with darker skin, as the contrast is more noticeable. This can lead to emotional challenges like low self-esteem, anxiety, and social isolation. It is considered an autoimmune condition where your immune cells attack the colour producing cells — melanocytes.",
      sections: [
        {
          heading: "Modern Treatment Breakthroughs",
          body: "There has been no satisfactory treatment till now for this condition. However, newer treatments like NBUVB (Narrow Band Ultraviolet B) and Excimer light have revolutionized the outcome in vitiligo. At Skin Sattva, we not only provide medical support but also emotional and psychological support which will in turn help in regaining the colour as well as the confidence.",
        },
        {
          heading: "Our Phototherapy Protocol",
          body: "Skin Sattva has the latest FDA-approved whole body NBUVB unit, which is considered the most powerful stimulus for repigmentation. It not only brings the colour back on white patches but also prevents the spread of the disease to other parts of the body. For small patches, we have the latest targeted phototherapy in the form of Excimer lamp which will bring back the color in 10-20 sessions. Both these treatments are given twice a week or at least once a week.",
        },
        {
          heading: "Home-Based Maintenance",
          body: "Once the colour is regained or 80% pigmentation is achieved, home-based phototherapy devices are given to our patients to be used at their home for convenient maintenance.",
        },
        {
          heading: "Advantages of Phototherapy",
          body: "Stimulates Melanin Production: UVB Phototherapy is particularly effective in stimulating the melanocytes in depigmented areas of the skin, promoting the repigmentation process.\n\nNon-Invasive Treatment: Phototherapy does not require surgery or systemic medications, which may have more significant side effects.\n\nTargeted Treatment: Phototherapy can be applied to specific areas of the body where vitiligo is present, offering a targeted approach to repigmenting the skin rather than affecting the entire body.\n\nEffective for Both Small and Large Patches: While most commonly used for smaller patches, it can also be effective for larger areas when combined with other treatments.\n\nSafe and Controlled: Administered under medical supervision, ensuring the right amount of UV exposure to minimize risks such as burning or premature aging.\n\nReduced Risk of Side Effects: When used correctly, phototherapy has fewer side effects compared to oral medications or systemic treatments. It also avoids the use of steroids, which can have long-term risks.\n\nBetter Tolerance and Fewer Risks: Compared to aggressive treatments such as systemic immunosuppressive drugs, phototherapy generally has fewer adverse effects, making it preferable for long-term management.\n\nNo Long-Term Commitment for Maintenance: Once significant repigmentation is achieved, some patients may only need maintenance treatments at periodic intervals to maintain the results.",
        },
        {
          heading: "Why Skin Sattva?",
          body: "Visit us to improve your appearance and boost your confidence. We provide the latest FDA-approved phototherapy equipment, expert dermatologist care, emotional and psychological support, and personalized treatment plans for every patient.",
        },
      ],
      benefits: ["Stimulates melanin production", "Non-invasive treatment", "Targeted for localized patches", "Safe under medical supervision", "Reduced steroid dependency", "Effective for small and large patches", "Home-based maintenance available", "Emotional and psychological support"],
      supportImage: "/images/service-detail/vitiligo-support.png",
      faqs: [
        { q: "How many sessions are needed for vitiligo?", a: "For small patches with Excimer lamp, 10-20 sessions may be needed. For larger areas with NBUVB, treatment continues for several months with sessions once or twice weekly." },
        { q: "Is phototherapy safe for long-term use?", a: "Yes, when administered under professional guidance, phototherapy has fewer side effects compared to oral medications and avoids the use of steroids which can have long-term risks." },
        { q: "Can vitiligo patches come back after treatment?", a: "Once repigmentation is achieved, maintenance treatments at periodic intervals help sustain results. Home-based phototherapy devices are provided for ongoing care." },
        { q: "Does Skin Sattva provide emotional support for vitiligo patients?", a: "Yes, we provide both medical and emotional/psychological support, understanding that vitiligo can significantly impact confidence and well-being." },
      ],
    },
  },
  {
    slug: "hair-transplantation",
    title: "Hair Transplantation",
    category: "hair",
    shortDescription: "Bio-FUE, Sapphire FUE, DHI and AHI techniques for natural high-density outcomes.",
    content: {
      leadCta: {
        label: "Restore Your Hair, Renew Your Confidence!",
        to: "/contact#booking-form-section",
      },
      overview:
        "At Skin Sattva, we are dedicated to understanding the science behind hair loss, and we specialize in scientifically proven hair restoration techniques that deliver long-lasting, natural-looking results. Whether you're struggling with a receding hairline, thinning hair, or baldness, Skin Sattva is your one-stop solution for all your hair needs. Our team of experts uses the latest advancements in hair restoration to provide personalized treatments that will help you regain your hair and confidence, so you can feel like yourself again.",
      sections: [
        {
          heading: "What is Hair Transplantation?",
          body: "Hair transplantation is a surgical procedure in which hair follicles are moved from a healthy part of your scalp (the donor area) to an area with thinning or no hair (the recipient area). The transplanted follicles grow naturally, making the results look like your own hair. Over time, these transplanted hairs continue to grow and can be styled just like the rest of your hair.",
        },
        {
          heading: "Why Choose Hair Transplantation?",
          body: "Permanent Results: Unlike temporary treatments such as medications or hairpieces, a hair transplant offers a permanent solution. Once the hair follicles are transplanted, they continue to grow naturally for a lifetime.\n\nNatural-Looking Hair: Our techniques ensure that the newly transplanted hair blends seamlessly with the rest of your natural hair, creating a fuller, more youthful appearance.\n\nMinimal Scarring: Thanks to advanced techniques like FUE (Follicular Unit Excision), there are no visible scars. Small dot-like marks will be hidden by the remaining hairs in the donor area.\n\nIncreased Confidence: Full, natural hair can make a dramatic difference in how you feel about yourself. Many of our patients report a significant boost in their self-esteem and a renewed sense of confidence.\n\nLess Downtime: Hair transplantation is a minimally invasive technique where one can resume their activities within 3 days after the procedure. It does not have prolonged bed rest or immobility.",
        },
        {
          heading: "1. Traditional Follicular Unit Excision (FUE)",
          body: "FUE is a time-tested technique where individual hair follicles are extracted from the donor area using tiny punches. These follicles, typically arranged in groups of 2 or 3 (known as grafts), are carefully cleaned, held in a special solution, and then implanted into the recipient area using forceps or needles. Larger needles are used to create slits or channels into which the grafts are placed.\n\nBenefits:\n- No visible linear scar, as no incision is made\n- Quicker recovery and minimal discomfort\n- Natural and seamless results",
        },
        {
          heading: "2. Sapphire FUE",
          body: "Sapphire FUE is a more refined, modern technique that uses specialized sapphire blades to create precise slits in the recipient area. This allows for better control over the direction, angle, and density of the hair follicles, resulting in high-density, natural-looking hair. The instruments used are imported and highly refined, ensuring optimal graft survival — up to 85-90%.",
        },
        {
          heading: "3. Bio-Sapphire FUE",
          body: "Bio-Sapphire FUE is the most advanced hair restoration technique, designed for precision, density, and rapid recovery. Each step of the process is optimized for minimal discomfort and maximum effectiveness.\n\nKey Features:\n- Painless Anaesthesia: Topical anaesthesia cream, vibration therapy, and calming music ensure patient comfort\n- Slit Making: Sapphire blades create precise slits for optimal graft placement, ensuring high density with minimal bleeding\n- Graft Harvesting: Imported serrated punches minimize damage, reducing graft wastage and transection\n- Graft Holding: Grafts are preserved in a growth factor-enriched medium, improving survival rates and accelerating growth while minimizing shedding\n- Implantation: The 'no root touch' and double forceps method ensure high density and natural-looking results\n\nBenefits: Up to 95% graft survival rate. Faster, denser hair growth with minimal shedding.",
        },
        {
          heading: "4. Direct Hair Implantation (DHI)",
          body: "DHI is an advanced method where hair follicles are implanted directly into the recipient area using specialized tools (Choi or KEEP implanters) without pre-made slits.\n\nBenefits:\n- Highly precise implantation for natural-looking results\n- Minimal 'out of body' time for grafts\n- Minimal or no bleeding\n- Faster results than other methods",
        },
        {
          heading: "5. Aesthetic Hair Integration (AHI)",
          body: "Developed by Dr. Shrenik after extensive research, AHI seamlessly integrates new grafts with existing hair without altering the person's natural aesthetics.\n\nKey Features:\n- Extraction: High-quality grafts are carefully harvested using Devroye's punches to prevent damage and wastage\n- Graft Preservation: Grafts are stored in HypothermosolR solution to maintain natural conditions\n- Slit Making: Sapphire blades ensure precise channels without harming existing hair\n- Implantation: The 'no root touch' technique is combined with magnifiers (Essilor Loupes) for maximum precision and density\n- Natural Results: The newly implanted grafts blend seamlessly, making it almost impossible to detect a transplant",
        },
        {
          heading: "Who is a Good Candidate for Hair Transplantation?",
          body: "Hair transplants can benefit both men and women experiencing hair loss. You may be an ideal candidate if:\n- You have sufficient donor hair (from the back or sides of your scalp)\n- Your hair loss has stabilized, and you're seeking a permanent solution\n- You're in good general health and do not have any medical conditions that could interfere with the healing process\n- You have realistic expectations about the results",
        },
        {
          heading: "The Hair Transplant Process: Step by Step",
          body: "Step 1 - Initial Consultation: Our doctors will assess your scalp using trichoscope, determine the degree or grade of hair loss, and suggest a plan depending upon your goals and expectations. Hairline will be designed and discussed with you. Routine lab tests will be done if you are ready to go ahead for the procedure.\n\nStep 2 - Preparation: On the day of the procedure, there will be reassessment of the scalp. We'll prepare your scalp by cleaning it and administering local anesthesia to ensure you're comfortable during the treatment.\n\nStep 3 - Procedure: Depending on the chosen technique, the procedure may last anywhere from a few hours to a full day. We carefully extract and implant the hair follicles with precision for natural results.\n\nStep 4 - Aftercare and Recovery: After the procedure, we'll provide you with detailed aftercare instructions. Most patients experience minimal discomfort and can return to normal activities in about 5-7 days.\n\nStep 5 - Follow-Up Care: We'll schedule follow-up appointments to monitor your progress, ensuring that your hair grows smoothly. Full results can typically be seen within 6 to 12 months.",
        },
        {
          heading: "Why Skin Sattva?",
          body: "State-of-the-art OT. Surgery by qualified dermatologist. No false claims. Authentic techniques. Personalized care. Free consultation available.",
        },
      ],
      pointSections: [
        {
          heading: "Hair Transplantation at Skin Sattva",
          points: [
            "Restore your hair, renew your confidence.",
            "Science-backed solutions for receding hairline, thinning hair, and baldness.",
            "Long-lasting, natural-looking results using proven hair restoration techniques.",
            "Personalized treatment planning to help restore hair and confidence.",
            "State-of-the-art OT surgery by a qualified dermatologist.",
            "Authentic techniques, personalized care, and no false claims.",
            "Free consultation support is available for lead generation and treatment planning.",
          ],
        },
        {
          heading: "What is Hair Transplantation?",
          points: [
            "Hair follicles are moved from a healthy donor area to areas with thinning or no hair.",
            "The transplanted follicles grow naturally and look like your own hair.",
            "Over time, transplanted hair continues to grow and can be styled like the rest of your hair.",
          ],
        },
        {
          heading: "Why Choose Hair Transplantation?",
          points: [
            "Permanent results: transplanted follicles continue to grow naturally for a lifetime.",
            "Natural-looking hair: new hair blends seamlessly with existing hair.",
            "Minimal scarring: advanced FUE techniques avoid visible linear scars.",
            "Increased confidence: fuller natural hair can improve self-esteem.",
            "Less downtime: most patients can resume activities within a few days.",
          ],
        },
        {
          heading: "Traditional Follicular Unit Excision (FUE)",
          points: [
            "This is one of the advanced hair transplant methods offered to suit unique patient needs.",
            "Individual hair follicles are extracted from the donor area using tiny punches.",
            "Follicles are arranged as grafts, cleaned, preserved, and implanted into the recipient area.",
            "No visible linear scar because no long incision is made.",
            "Quicker recovery with minimal discomfort.",
            "Natural and seamless results.",
          ],
        },
        {
          heading: "Sapphire FUE",
          points: [
            "Specialized sapphire blades create precise slits in the recipient area.",
            "Better control over direction, angle, and density of hair follicles.",
            "High-density, natural-looking hair restoration.",
            "Imported refined instruments support optimal graft survival of up to 85-90%.",
            "Each technique offers unique advantages based on patient needs and expectations.",
          ],
        },
        {
          heading: "Bio-Sapphire FUE",
          points: [
            "Advanced technique designed for precision, density, and rapid recovery.",
            "Topical anaesthesia cream, vibration therapy, and calming music improve comfort.",
            "Sapphire blades create precise slits for high density with minimal bleeding.",
            "Imported serrated punches reduce graft wastage and transection.",
            "Grafts are preserved in a growth factor-enriched medium to improve survival.",
            "No-root-touch implantation with double forceps supports natural-looking results.",
            "Graft survival can reach 90-95% with faster, denser growth and minimal shedding.",
          ],
        },
        {
          heading: "Direct Hair Implantation (DHI)",
          points: [
            "Follicles are implanted directly using Choi or KEEP implanters without pre-made slits.",
            "Highly precise implantation for natural-looking results.",
            "Minimal out-of-body time for grafts.",
            "Minimal or no bleeding.",
            "Faster results than other methods.",
          ],
        },
        {
          heading: "Aesthetic Hair Integration (AHI)",
          points: [
            "Developed by Dr. Shrenik after extensive research.",
            "New grafts are integrated with existing hair without disturbing natural aesthetics.",
            "High-quality grafts are harvested using Devroye's punches to prevent damage and wastage.",
            "Grafts are stored in HypothermosolR solution to maintain natural conditions.",
            "Sapphire blades create precise channels without harming existing hair.",
            "No-root-touch technique and Essilor Loupes help maximize precision and density.",
            "Newly implanted grafts blend seamlessly, making the transplant difficult to detect.",
          ],
        },
        {
          heading: "Comparison of FUE Techniques",
          points: [
            "Comfort during anaesthesia: Sapphire FUE is good, Bio-Sapphire FUE is very high, and AHI is virtually painless.",
            "Extraction: Sapphire FUE uses sharp punches, Bio-Sapphire FUE uses serrated Magna punches, and AHI uses Devroye's punches.",
            "Slit making: Sapphire FUE uses CTS blades, while Bio-Sapphire FUE and AHI use sapphire blades.",
            "Instruments: Sapphire FUE uses stainless steel forceps, while Bio-Sapphire FUE and AHI use titanium forceps.",
            "Magnifiers: not used in Sapphire FUE, used in Bio-Sapphire FUE, and Essilor Loupes are used in AHI.",
            "Graft holding solution: Sapphire FUE uses Ringer Lactate, Bio-Sapphire FUE uses Ringer Lactate + GFC, and AHI uses Hypothermosol + GFC.",
            "Implantation: Sapphire FUE and Bio-Sapphire FUE use double forceps, while AHI uses Choi implanters.",
            "Graft survival rate: Sapphire FUE offers 85-90%, Bio-Sapphire FUE offers 90-95%, and AHI offers up to 98%.",
            "Density: Sapphire FUE gives high density, Bio-Sapphire FUE gives very high density, and AHI gives the highest density.",
            "Appearance: Sapphire FUE looks natural, Bio-Sapphire FUE looks natural-looking, and AHI is unrecognizable as transplanted.",
            "Damage to existing hair: Sapphire FUE has a slight chance, Bio-Sapphire FUE has minimal risk, and AHI has none.",
          ],
        },
        {
          heading: "Who is a Good Candidate?",
          points: [
            "Men and women experiencing hair loss can benefit from hair transplantation.",
            "You have sufficient donor hair from the back or sides of the scalp.",
            "Your hair loss has stabilized and you want a permanent solution.",
            "You are in good general health without conditions that interfere with healing.",
            "You have realistic expectations about the results.",
          ],
        },
        {
          heading: "The Hair Transplant Process",
          points: [
            "Initial Consultation: scalp is assessed using a trichoscope, hair loss grade is determined, and a plan is made around your goals.",
            "Hairline Design: the hairline is designed and discussed before the procedure.",
            "Lab Tests and Booking: routine lab tests are done, and once reports are normal, the procedure date is reserved.",
            "Preparation: on the day of procedure, the scalp is reassessed, cleaned, and local anaesthesia is given for comfort.",
            "Procedure: follicles are extracted and implanted with precision; the procedure may take a few hours to a full day.",
            "Aftercare and Recovery: detailed aftercare instructions are provided, with most patients returning to normal activities in 5-7 days.",
            "Follow-Up Care: progress is monitored, and full results are usually visible within 6-12 months.",
          ],
        },
        {
          heading: "Frequently Asked Questions",
          points: [
            "Is the hair transplant procedure painful? Thanks to local anesthesia, the procedure itself is virtually painless. Mild swelling or tenderness afterward is temporary and manageable.",
            "How soon will I see results? Hair growth usually begins within 3-4 months, noticeable results appear in about 6-12 months, and full results are generally visible within a year.",
            "Will the transplanted hair last? Yes. Once transplanted, the follicles are resistant to DHT, so the results are permanent.",
            "How many treatments will I need? Some patients need one session, while advanced baldness with limited donor area may require two staged sessions.",
          ],
        },
      ],
      comparisonTable: {
        headers: ["Feature", "Sapphire FUE", "Bio-Sapphire FUE", "Aesthetic Hair Integration (AHI)"],
        rows: [
          ["Comfort During Anaesthesia", "Good", "Very High", "Virtually Painless"],
          ["Extraction", "Sharp Punches", "Serrated Magna Punches", "Devroye's Punches"],
          ["Slit Making", "CTS Blades", "Sapphire Blades", "Sapphire Blades"],
          ["Instruments", "Stainless Steel Forceps", "Titanium Forceps", "Titanium Forceps"],
          ["Magnifiers", "Not Used", "Used", "Essilor Loupes"],
          ["Graft Holding Solution", "Ringer Lactate", "Ringer Lactate + GFC", "Hypothermosol + GFC"],
          ["Implantation", "Double Forceps", "Double Forceps", "Choi Implanters"],
          ["Graft Survival Rate", "85-90%", "90-95%", "Up to 98%"],
          ["Density", "High", "Very High", "Highest"],
          ["Appearance", "Natural", "Natural-Looking", "Unrecognizable as Transplanted"],
          ["Damage to Existing Hair", "Slight Chance", "Minimal", "None"],
        ],
      },
      benefits: ["Permanent results", "Natural-looking hair", "Minimal scarring", "Low downtime (3 days)", "Up to 98% graft survival (AHI)", "Multiple technique options", "Free consultation"],
      supportImage: "/images/service-detail/hair-transplant-detail.jpg",
      beforeAfterImages: [
        { src: "/images/service-detail/ht-ba-1.png", alt: "Hair transplantation before and after result 1" },
        { src: "/images/service-detail/ht-ba-2.png", alt: "Hair transplantation before and after result 2" },
        { src: "/images/service-detail/ht-ba-3.png", alt: "Hair transplantation before and after result 3" },
        { src: "/images/service-detail/ht-ba-4.png", alt: "Hair transplantation before and after result 4" },
        { src: "/images/service-detail/ht-ba-5.png", alt: "Hair transplantation before and after result 5" },
        { src: "/images/service-detail/ht-ba-6.png", alt: "Hair transplantation before and after result 6" },
        { src: "/images/service-detail/ht-ba-7.png", alt: "Hair transplantation before and after result 7" },
        { src: "/images/service-detail/ht-ba-8.png", alt: "Hair transplantation before and after result 8" },
        { src: "/images/service-detail/ht-ba-9.png", alt: "Hair transplantation before and after result 9" },
      ],
      faqs: [
        { q: "Is the hair transplant procedure painful?", a: "Thanks to local anesthesia, the procedure itself is virtually painless. Afterward, you may experience mild swelling or tenderness, but these symptoms are temporary and manageable." },
        { q: "How soon will I see results?", a: "Hair growth from a transplant typically begins within 3 to 4 months, with noticeable results appearing after about 6-12 months. Full results are generally visible within a year." },
        { q: "Will the transplanted hair last?", a: "Yes, once the hair follicles are transplanted, they are resistant to the hormone that causes hair loss (DHT), so the results are permanent." },
        { q: "How many treatments will I need?", a: "The number of treatments depends on the extent of your hair loss. For some, a single session is sufficient to cover the baldness. But in those having advanced grade of baldness and with lesser donor area, we stage the procedure into two sessions." },
      ],
    },
  },
  {
    slug: "hair-loss-treatments",
    title: "Hair Loss Treatments",
    category: "hair",
    shortDescription: "PRP, GFC, QR678, Exosomes and LLLT for medically guided hair restoration.",
    content: {
      overview: "Hair loss can result from multiple factors including genetics, hormones, stress, and nutritional deficiencies. At Skin Sattva, we offer a comprehensive range of non-surgical solutions including PRP, GFC, QR678, Exosomes, and Low-Level Laser Therapy — each selected based on thorough scalp analysis and trichoscopic assessment.",
      sections: [
        {
          heading: "Our Diagnostic Approach",
          body: "Treatment selection is based on detailed scalp analysis using trichoscopy, grade of hair loss assessment, and understanding of long-term goals. This ensures the most effective therapy is chosen for your specific pattern.",
        },
        {
          heading: "Treatment Options",
          body: "PRP (Platelet-Rich Plasma) uses your own growth factors to nourish follicles. GFC (Growth Factor Concentrate) enhances the follicular environment. QR678 is a targeted injectable therapy. Exosomes offer advanced regenerative support. LLLT provides non-invasive light-based stimulation.",
        },
        {
          heading: "Combination Protocols",
          body: "For optimal results, treatments are often combined in structured sessions with periodic reassessment. This multi-modality approach addresses hair loss from multiple angles for better density and hair quality outcomes.",
        },
      ],
      benefits: ["Non-surgical solutions", "Multiple treatment options", "Personalized protocols", "Trichoscopy-guided planning", "Combinable with transplant"],
      supportImage: "/images/service-detail/hairloss-support-new.png",
      beforeAfterImages: [
        { src: "/images/service-detail/hairloss-ba-1.jpg", alt: "PRP hair loss before and after" },
        { src: "/images/service-detail/hairloss-ba-3.jpg", alt: "GFC after 3 sessions result" },
        { src: "/images/service-detail/hairloss-ba-4.jpg", alt: "GFC before and after result" },
        { src: "/images/service-detail/hairloss-ba-5.jpg", alt: "Hair loss treatment result" },
      ],
      faqs: [
        { q: "Which hair loss treatment is best for me?", a: "The best treatment depends on your hair loss pattern, grade, and goals. Our dermatologist will recommend the most suitable option after thorough scalp analysis." },
        { q: "How many sessions are typically needed?", a: "Session count varies based on treatment type and severity. Most protocols involve 4-8 sessions with periodic maintenance thereafter." },
        { q: "Can these treatments be combined with hair transplant?", a: "Yes, non-surgical treatments are often used as adjuncts before or after transplantation to improve overall density and graft survival." },
      ],
    },
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "aesthetics",
    shortDescription: "Advanced diode and Nd:YAG based protocols for long-term hair reduction.",
    content: {
      highlightText: "Ditch Razor. Ditch Waxing. Smooth Skin That Lasts.",
      leadCta: {
        label: "Book Your Consultation",
        to: "/contact#booking-form-section",
      },
      overview: "Hairs have to be optimum at the right place and in right number. A headful of hairs gives that youthful look. But excess hairs on face especially in women are unwanted and frustrating. One will have to remove them frequently with razors, threading and waxing which may lead to ingrown hairs and rough skin. At Skin Sattva, we offer advanced Laser Hair Reduction using the latest Triple Wavelength Diode Laser technology, designed to safely and effectively reduce unwanted hair on all skin types.",
      sections: [
        {
          heading: "What is Laser Hair Reduction?",
          body: "Laser Hair Reduction (LHR) is a medical procedure that uses concentrated laser energy to target and destroy hair follicles responsible for hair growth. The laser selectively heats the melanin present in the hair roots, damaging them while leaving the surrounding skin unharmed. Over multiple sessions, hair growth becomes thinner, lighter, and significantly reduced. Laser hair reduction does not remove hair permanently in a single session but provides long-term hair reduction with smoother skin.",
        },
        {
          heading: "Why Choose Skin Sattva for Laser Hair Reduction?",
          body: "At Skin Sattva, treatments are performed under the supervision of experienced dermatologist using advanced laser technology. Our treatment uses latest Triple Wavelength Diode Laser technology, is safe for Indian skin types, has minimal discomfort with advanced cooling system, and is performed in a hygienic and comforting clinical environment.",
        },
        {
          heading: "Who Can Get It Done?",
          body: "Anyone male or female above the age of 14 with excess unwanted hairs can get the laser done. It can be done in those with ingrown hairs and those looking for long-term hair reduction. A consultation at Skin Sattva will help determine the best treatment plan for your skin and hair type.",
        },
      ],
      pointSections: [
        {
          heading: "Ditch Razor. Ditch Waxing.",
          points: [
            "Smooth skin that lasts.",
            "Say goodbye to the endless cycle of razors and waxing.",
            "Say hello to effortlessly smooth skin.",
            "Excess hairs on the face, especially in women, can be unwanted and frustrating.",
            "Frequent razors, threading, and waxing may lead to ingrown hairs and rough skin.",
          ],
        },
        {
          heading: "Laser Hair Reduction at Skin Sattva",
          points: [
            "Skin Sattva offers advanced Laser Hair Reduction using latest Triple Wavelength Diode Laser technology.",
            "The treatment is designed to safely and effectively reduce unwanted hair on all skin types.",
            "It delivers long-lasting smooth skin with minimal discomfort and no downtime.",
            "Treatments are performed under the supervision of experienced dermatologist using advanced laser technology.",
          ],
        },
        {
          heading: "What is Laser Hair Reduction?",
          points: [
            "Laser Hair Reduction (LHR) is a medical procedure that uses concentrated laser energy to target hair follicles responsible for hair growth.",
            "The laser selectively heats the melanin present in the hair roots.",
            "This damages the hair follicle while leaving the surrounding skin unharmed.",
            "Over multiple sessions, hair growth becomes thinner, lighter, and significantly reduced.",
            "Laser hair reduction does not remove hair permanently in a single session.",
            "It provides long-term hair reduction with smoother skin.",
          ],
        },
        {
          heading: "Why Choose Skin Sattva?",
          points: [
            "Latest Triple Wavelength Diode Laser technology.",
            "Safe for Indian skin types.",
            "Minimal discomfort with advanced cooling system.",
            "Dermatologist performed sessions.",
            "Hygienic and comforting clinical environment.",
          ],
        },
        {
          heading: "Triple Wavelength Diode Laser Technology",
          points: [
            "The advanced laser combines three powerful wavelengths in a single treatment.",
            "755 nm Alexandrite wavelength targets superficial hair and works best for finer hair.",
            "810 nm gold standard wavelength provides effective hair reduction for most hair types.",
            "1064 nm Nd:YAG wavelength penetrates deeper hair follicles and is safest for darker skin tones.",
            "This combination treats different hair depths and thickness simultaneously.",
            "It helps achieve better outcomes and faster sessions.",
          ],
        },
        {
          heading: "Areas That Can Be Treated",
          points: [
            "Face including upper lip, chin, and sideburns.",
            "Underarms.",
            "Arms.",
            "Legs.",
            "Bikini line.",
            "Full body.",
            "Chest and back for men.",
            "Abdomen.",
          ],
        },
        {
          heading: "How Many Sessions Are Required?",
          points: [
            "Hair grows in cycles, and laser treatment is effective during the active growth phase.",
            "Multiple sessions are required to see visible reduction.",
            "Most patients require 8-10 sessions spaced 4-6 weeks apart for optimal hair reduction.",
            "Maintenance sessions may be recommended depending on individual hair growth patterns.",
          ],
        },
        {
          heading: "Is the Procedure Painful?",
          points: [
            "With the latest cold sapphire handpiece, pain is almost negligible.",
            "The process is very comfortable.",
          ],
        },
        {
          heading: "Benefits of Laser Hair Reduction",
          points: [
            "Long-term hair reduction.",
            "Smoother skin.",
            "Reduction in ingrown hairs.",
            "Reduced pigmentation from shaving or waxing.",
            "Quick treatment sessions.",
            "No downtime.",
          ],
        },
        {
          heading: "Who Can Get LHR Done?",
          points: [
            "Anyone male or female above the age of 14 with excess unwanted hairs can get the laser done.",
            "It can be done for those with ingrown hairs.",
            "It is suitable for those looking for long-term hair reduction.",
            "A consultation at Skin Sattva helps determine the best treatment plan for your skin and hair type.",
          ],
        },
        {
          heading: "Book Your Consultation",
          points: [
            "Book your consultation to fill in your details and plan the right laser hair reduction protocol.",
            "Before and after images can be shown at the end of the page.",
            "Results and testimonials can be highlighted for patient confidence.",
          ],
        },
      ],
      benefits: ["Long-term hair reduction", "Smoother skin", "Reduction in ingrown hairs", "Reduced pigmentation from shaving or waxing", "Quick treatment sessions", "No downtime"],
      supportImage: "/images/service-detail/laser-hair-reduction-detail.jpg",
      beforeAfterImages: [
        { src: "/images/service-detail/lhr-ba-1.jpg", alt: "Laser hair reduction before and after" },
        { src: "/images/service-detail/lhr-ba-2.jpg", alt: "Laser hair reduction chin and neck result" },
        { src: "/images/service-detail/lhr-ba-3.jpg", alt: "Laser hair reduction neck and chin result" },
        { src: "/images/service-detail/lhr-ba-4.jpg", alt: "Female chin laser hair reduction before and after" },
        { src: "/images/service-detail/lhr-ba-5.jpg", alt: "Men abdomen laser hair reduction result" },
        { src: "/images/service-detail/lhr-ba-6.jpg", alt: "Female underarms laser hair reduction before and after" },
      ],
      faqs: [
        { q: "How many sessions are needed for laser hair reduction?", a: "Typically 6-8 sessions spaced 4-6 weeks apart are recommended. Maintenance sessions may be needed annually." },
        { q: "Is laser hair reduction permanent?", a: "Laser hair reduction significantly reduces hair growth — up to 80-90%. Some fine hair may regrow over time, which is managed with occasional maintenance sessions." },
        { q: "Is it painful?", a: "Most patients describe a mild snapping sensation. Our cooling systems ensure comfort throughout the procedure." },
      ],
    },
  },
  {
    slug: "laser-toning",
    title: "Laser Toning",
    category: "aesthetics",
    shortDescription: "Q-switched based toning for pigmentation and brighter, clearer skin.",
    content: {
      overview: "Laser toning uses low-fluence Q-switched Nd:YAG laser to gradually reduce melanin deposits, improve skin tone, and achieve brighter, clearer skin. It is one of the most effective treatments for pigmentation management at Skin Sattva.",
      sections: [
        {
          heading: "How It Works",
          body: "The Q-switched laser delivers energy in very short pulses to break down excess melanin without damaging surrounding tissue. Over multiple sessions, pigmentation fades and skin tone becomes more even and luminous.",
        },
        {
          heading: "Best For",
          body: "Uneven skin tone, dullness, melasma support, tanning, sun damage, and post-inflammatory pigmentation. It can be used on face and body areas.",
        },
      ],
      benefits: ["Brighter, clearer skin", "Reduces pigmentation", "Melasma support", "No downtime", "Safe for Indian skin tones"],
      supportImage: "/images/service-detail/laser-toning-support.jpg",
      faqs: [
        { q: "How many laser toning sessions are needed?", a: "Typically 4-8 sessions spaced 2-4 weeks apart, depending on the severity of pigmentation." },
        { q: "Is laser toning safe for darker skin?", a: "Yes, Q-switched Nd:YAG laser is safe for Indian and darker skin tones when performed by an experienced dermatologist." },
      ],
    },
  },
  {
    slug: "anti-aging-treatments",
    title: "Anti-Aging Treatments",
    category: "aesthetics",
    shortDescription: "Botox, fillers, RF and HIFU based non-surgical rejuvenation.",
    content: {
      overview:
        "Anti-aging treatments at Skin Sattva are structured plans to reduce fine lines, improve facial volume, support skin tightening, and restore youthful contours without unnecessary downtime.",
      sections: [
        {
          heading: "What is included",
          body: "Depending on concern, your plan may include Botox, fillers, RF tightening, HIFU lifting, and collagen-stimulating procedures. Each protocol is selected after detailed facial and skin assessment.",
        },
        {
          heading: "Who can opt",
          body: "Ideal for people noticing early or moderate signs of aging such as fine lines, volume loss, skin laxity, jawline softening, and texture dullness.",
        },
        {
          heading: "Expected outcome",
          body: "Results are gradual and natural-looking with improved firmness, softer lines, and better facial definition. Maintenance sessions are planned based on treatment selected.",
        },
      ],
      benefits: ["Improved skin firmness", "Softer lines", "Better facial contour", "Natural rejuvenation"],
      supportImage: "/images/service-detail/anti-aging-support.png",
    },
  },
  {
    slug: "medifacials",
    title: "Medifacials",
    category: "aesthetics",
    shortDescription: "Medical-grade facials including Vampire and Oxygeneo protocols.",
    content: {
      highlightText: "Relax. Rejuvenate. Reveal your glow.",
      leadCta: {
        label: "Book Your Medifacial",
        to: "/contact#booking-form-section",
      },
      overview:
        "Skin Sattva has come up with tailor-made, medical grade facials specially designed by Dr Shrenik. These facials are unique because they offer a spa-like experience with actual visible results. They are suited for anyone having an event or for those who want to maintain their skin quality.",
      sections: [
        {
          heading: "Dermatologist-Designed Medifacials",
          body: "Relax. Rejuvenate. Reveal your glow with dermatologist-designed medifacials tailored for your skin.",
        },
        {
          heading: "Who They Are For",
          body: "These medifacials are suited for pre-event glow, dull skin, oily or acne-prone skin, acne marks, pigmentation, tan, uneven tone, mature dry aging skin, and skin maintenance.",
        },
        {
          heading: "Why Skin Sattva",
          body: "The medifacial protocols are medical grade and tailor-made by Dr Shrenik, combining skin-focused steps, serums, peels, masks, Korean machines, and device-based treatment for visible results.",
        },
      ],
      pointSections: [
        {
          heading: "Main Highlights",
          points: [
            "Relax. Rejuvenate. Reveal your glow.",
            "Dermatologist-designed medifacials are tailored for your skin.",
            "Medical grade facials are specially designed by Dr Shrenik.",
            "They offer a spa-like experience with actual visible results.",
            "They are suitable before events.",
            "They also help maintain skin quality.",
          ],
        },
        {
          heading: "Depending on the Concern",
          points: [
            "Basic Hydraglow Facial is ideal for dull, tired skin and pre-event glow.",
            "Clear Skin Ritual Facial is ideal for oily or acne-prone skin and acne marks.",
            "Radiance Revive Facial is ideal for pigmentation, tan, and uneven tone.",
            "Anti-Age Luxe Facial is ideal for mature, dry, aging skin.",
            "Hollywood Facial or Carbon Peel is ideal for tanning and pigmentation.",
            "Redcarpet Medifacial is ideal for tanning and pigmentation.",
          ],
        },
        {
          heading: "Important Treatment Steps",
          points: [
            "Cleansing and Jet Spray prepare the skin.",
            "Cavitation and Hydradermabrasion support deep cleansing and exfoliation.",
            "Electroporation helps infuse active serums.",
            "Vitamin C, glow, azelaic, glutathione, brightening, collagen booster, and peptide serums are used based on the concern.",
            "Cold Hammer and Hyaluronic Serum calm and hydrate the skin.",
            "Peels such as lactic, salicylic, lightening, and carbon peel are chosen depending on the treatment.",
            "RF Skin Tightening supports anti-aging protocols.",
            "Laser blasting and laser dual toning are included in selected facials.",
            "Brightening, charcoal, peptide infusion, and Korean brightening masks are used depending on the protocol.",
          ],
        },
        {
          heading: "Why Choose Skin Sattva Medifacials?",
          points: [
            "Treatments are tailor-made instead of one-size-fits-all.",
            "Each facial is selected according to skin concern.",
            "The experience feels relaxing while still being result-oriented.",
            "Protocols combine medical-grade products and device-based steps.",
            "They are a strong option for event glow, maintenance, pigmentation support, acne-prone skin, and anti-aging care.",
          ],
        },
      ],
      comparisonTable: {
        title: "Medifacial Options",
        headers: ["Facial Name", "Ideal For", "Key Steps", "Duration"],
        rows: [
          [
            "Basic Hydraglow Facial",
            "Dull, tired skin; pre-event glow",
            "Cleansing; Jet Spray; Cavitation; Hydradermabrasion; Vit C/Glow Serum + Electroporation; Cold Hammer + Hyaluronic Serum; Lactic Peel",
            "30 mins",
          ],
          [
            "Clear Skin Ritual Facial",
            "Oily/acne-prone skin; acne marks",
            "Cleansing; Jet Spray; Comedone Extraction; Hydradermabrasion; Azelaic Serum; Salicylic Peel; Cold Hammer; Charcoal Mask",
            "45 mins",
          ],
          [
            "Radiance Revive Facial",
            "Pigmentation; tan; uneven tone",
            "Cleansing; Jet Spray; Cavitation; Hydradermabrasion; Glutathione/Brightening Serum; Cold Hammer; Lightening Peel; Brightening Mask",
            "45 mins",
          ],
          [
            "Anti-Age Luxe Facial",
            "Mature, dry, aging skin",
            "All Hydraglow steps; Collagen Booster Serum; RF Skin Tightening; Peptide Infusion Mask",
            "50 mins",
          ],
          [
            "Hollywood Facial (Carbon Peel)",
            "Tanning and pigmentation",
            "Cleansing; Jet Spray; Electroporation; Carbon Gel application; Laser Blasting",
            "30 mins",
          ],
          [
            "Redcarpet Medifacial",
            "Tanning and pigmentation",
            "Cleansing; Jet Spray; Cavitation; Hydradermabrasion; Laser dual toning; Korean brightening Mask",
            "60 mins",
          ],
        ],
      },
      showComparisonTableWithPoints: true,
      benefits: ["Spa-like experience with visible results", "Tailor-made by Dr Shrenik", "Pre-event glow", "Skin maintenance", "Concern-based protocols", "Medical-grade facial steps"],
      supportImage: "/images/service-detail/medifacials-detail.jpg",
    },
  },
  {
    slug: "dermatosurgery",
    title: "Dermatosurgery",
    category: "dermatosurgery",
    shortDescription: "Minor surgical procedures including tags, moles, cysts and biopsies.",
    content: {
      overview: "Dermatosurgery at Skin Sattva encompasses precision-focused skin procedures performed by qualified dermatologists. From cosmetic lesion removal to diagnostic biopsies, every procedure is planned with safety, minimal scarring, and optimal cosmetic outcomes in mind.",
      sections: [
        {
          heading: "Procedures We Offer",
          body: "Skin tag removal, mole removal, cyst excision, punch excision, punch biopsy, and vitiligo surgery. Each procedure is selected based on the lesion type, location, and clinical indication.",
        },
        {
          heading: "Our Approach",
          body: "All procedures are performed under local anaesthesia in a sterile clinical environment. Wound care guidance and follow-up are provided for optimal healing and minimal scarring.",
        },
      ],
      benefits: ["Precision dermatological procedures", "Minimal scarring", "Local anaesthesia", "Quick recovery", "Dermatologist-performed"],
      supportImage: "/images/service-detail/dermatosurgery-support.jpg",
      faqs: [
        { q: "Are dermatosurgery procedures painful?", a: "Local anaesthesia ensures the procedures are virtually painless. Post-procedure discomfort is mild and manageable." },
        { q: "How long is the recovery?", a: "Most minor procedures heal within 5-10 days with proper wound care. Specific recovery timelines depend on the procedure performed." },
      ],
    },
  },
  {
    slug: "mole-removal",
    title: "Mole Removal",
    category: "dermatosurgery",
    shortDescription: "Safe removal with minimal scarring and clinical evaluation.",
    content: {
      overview: "Mole removal at Skin Sattva is performed for both cosmetic and clinical indications. Every mole is evaluated by a dermatologist before removal to ensure accurate diagnosis and appropriate treatment planning.",
      sections: [
        {
          heading: "When to Consider Removal",
          body: "Moles that are cosmetically bothersome, changing in size, shape, or color, or causing discomfort should be evaluated. Suspicious moles may be sent for histopathology after removal.",
        },
        {
          heading: "Removal Methods",
          body: "Technique is selected based on mole type, size, location, and aesthetic goals. Options include surgical excision, shave excision, and laser-assisted removal.",
        },
      ],
      benefits: ["Clinical evaluation before removal", "Minimal scarring", "Histopathology when needed", "Multiple technique options"],
      supportImage: "/images/service-detail/mole-removal-support.jpg",
      beforeAfterImages: [
        { src: "/images/service-detail/mole-ba-1.jpg", alt: "Mole removal before and after result 1" },
        { src: "/images/service-detail/mole-ba-2.jpg", alt: "Pyogenic granuloma removal result" },
        { src: "/images/service-detail/mole-ba-3.jpg", alt: "Mole removal before and after result 3" },
      ],
      faqs: [
        { q: "Will mole removal leave a scar?", a: "Modern techniques minimize scarring. The extent depends on mole size and location. Detailed wound care instructions are provided for best cosmetic outcome." },
        { q: "Can removed moles come back?", a: "Properly excised moles rarely recur. Follow-up assessment ensures complete removal." },
      ],
    },
  },
  {
    slug: "phototherapy",
    title: "Phototherapy",
    category: "skin",
    shortDescription: "NBUVB and Excimer-based protocols for psoriasis, vitiligo, and eczema.",
    content: {
      overview: "Phototherapy is a controlled light-based therapy used to manage chronic skin conditions like vitiligo, psoriasis, and eczema. At Skin Sattva, we have the latest FDA-approved NBUVB whole body unit and targeted Excimer lamp for precision treatment.",
      sections: [
        {
          heading: "How Phototherapy Works",
          body: "UVB Phototherapy (narrowband) is particularly effective in stimulating melanocytes in depigmented areas, promoting repigmentation. It can also control inflammatory skin conditions by modulating the immune response in the skin.",
        },
        {
          heading: "Conditions We Treat",
          body: "Vitiligo — stimulates melanin production and prevents spread. Psoriasis — controls red scaly patches with Speigel series NBUVB. Eczema — targeted Excimer rays treat affected areas with minimal steroid dependency.",
        },
        {
          heading: "Safety Profile",
          body: "When administered under medical supervision, phototherapy has fewer side effects compared to oral medications or systemic treatments. It avoids the use of steroids and is well-tolerated for long-term management.",
        },
      ],
      benefits: ["Stimulates melanin production", "Non-invasive treatment", "Targeted and whole-body options", "Reduced steroid dependency", "Safe under medical supervision", "Effective for multiple conditions"],
      supportImage: "/images/service-detail/phototherapy-support.jpg",
      faqs: [
        { q: "How often do I need phototherapy sessions?", a: "Sessions are typically given once or twice a week. The exact frequency depends on your condition and response to treatment." },
        { q: "Is phototherapy painful?", a: "No, phototherapy is painless. You may feel mild warmth during the session, but there is no discomfort or downtime." },
        { q: "How long does each session take?", a: "Each session is brief, typically lasting only a few minutes. The duration increases gradually as treatment progresses." },
      ],
    },
  },
  {
    slug: "eczema",
    title: "Eczema",
    category: "skin",
    shortDescription: "Targeted excimer phototherapy to reduce flare-ups with minimal steroid dependency.",
    content: {
      overview:
        "Eczema is a chronic inflammatory skin condition that causes itchy, red, and dry patches. Skin Sattva offers targeted phototherapy in the form of Excimer rays which will target only the affected eczematous part and control the disease within weeks.",
      sections: [
        {
          heading: "Targeted Excimer Therapy",
          body: "This targeted phototherapy will reduce the need and dependency on steroids which are known to cause short and long-term side effects. We rarely use steroids at Skin Sattva, preferring advanced light-based protocols for safer, long-term disease management.",
        },
        {
          heading: "Why Choose This Approach?",
          body: "Unlike traditional steroid-based treatments, Excimer therapy targets only the affected areas without affecting surrounding healthy skin. This precision approach minimizes side effects while delivering effective control of eczematous lesions.",
        },
      ],
      benefits: ["Targeted treatment — only affected areas", "Reduced steroid dependency", "Controls disease within weeks", "Minimal side effects", "Safe for long-term use"],
      supportImage: "/images/service-detail/eczema-support.jpg",
      faqs: [
        { q: "How quickly does Excimer therapy work for eczema?", a: "Most patients notice improvement within a few weeks of starting treatment, with significant control achieved over the course of therapy." },
        { q: "Is this treatment safe for children?", a: "Excimer therapy is generally safe for various age groups. Suitability is assessed during consultation based on the child's age and condition severity." },
        { q: "Will I still need steroid creams?", a: "Our goal is to reduce or eliminate steroid dependency. Many patients can significantly reduce their steroid usage with regular Excimer sessions." },
      ],
    },
  },
  {
    slug: "keloids",
    title: "Keloids",
    category: "skin",
    shortDescription: "Combination injectable and microneedling protocol for long-term flattening support.",
    content: {
      overview:
        "A keloid is an overgrowth of scar tissue that forms at the site of an injury or incision. Unlike regular scars, keloids extend beyond the wound's original borders and can grow larger over time. Keloids can be raised, thick, and sometimes red or darker in color than the surrounding skin. They can occur anywhere on the body but are more common on areas like the chest, shoulders, earlobes, and upper back.",
      sections: [
        {
          heading: "What Causes Keloids?",
          body: "Keloids are associated with an abnormal healing response where the body produces too much collagen during the wound-healing process. Race, genetics, injury or surgery, and the site on the body are certain factors which determine the development of keloids.",
        },
        {
          heading: "Our Treatment Approach",
          body: "Till now there is no satisfactory treatment for keloids and there is 100% chance of recurrence once treated by surgery alone. At Skin Sattva, we combine a cocktail of injections delivered through fractional microneedling which will flatten the keloid and provide long-term keloid-free periods of 9 to 12 months.",
        },
        {
          heading: "Treatment Schedule",
          body: "Sessions are done once in 1-2 months for the first year. In the second year, 3-4 maintenance sessions are recommended to sustain results and prevent recurrence.",
        },
      ],
      benefits: ["Flattens raised scars", "9-12 months keloid-free periods", "Non-surgical approach", "Structured maintenance plan", "Fractional microneedling delivery"],
      supportImage: "/images/service-detail/keloids-support.jpg",
      faqs: [
        { q: "Can keloids be permanently removed?", a: "Keloids have a high recurrence rate with surgery alone. Our combination protocol provides long keloid-free periods with structured maintenance to keep them under control." },
        { q: "Is the treatment painful?", a: "The fractional microneedling delivery method is well-tolerated. Topical numbing is applied before the procedure for patient comfort." },
        { q: "How many sessions are needed?", a: "Monthly sessions for the first year, followed by 3-4 maintenance sessions in the second year. The exact number depends on keloid size and response." },
      ],
    },
  },
  {
    slug: "lichen-planus",
    title: "Lichen Planus",
    category: "skin",
    shortDescription: "Medical dermatology management with diagnosis-led therapy planning.",
    content: {
      overview: "Lichen planus requires specialist-led management and follow-up-based treatment plans.",
      sections: [
        {
          heading: "Care plan",
          body: "Consultation includes trigger assessment and therapies tailored to severity and body area.",
        },
      ],
      supportImage: "/images/service-detail/lichen-planus-support.jpg",
    },
  },
  {
    slug: "fungal-infection",
    title: "Fungal Infection",
    category: "skin",
    shortDescription: "Accurate diagnosis with targeted medical treatment and recurrence prevention guidance.",
    content: {
      overview: "Persistent fungal infections need proper diagnosis, medication selection, and hygiene guidance.",
      sections: [
        {
          heading: "What we do",
          body: "Targeted treatment with lifestyle correction and recurrence-prevention protocols.",
        },
      ],
      supportImage: "/images/service-detail/fungal-infection-support.jpg",
    },
  },
  {
    slug: "urticaria-control-treatment",
    title: "Urticaria Control Treatment",
    category: "skin",
    shortDescription: "Clinical management for recurrent hives and trigger-based flares.",
    content: {
      overview: "Urticaria can be unpredictable and needs individualized medical control.",
      sections: [
        {
          heading: "Approach",
          body: "We assess triggers and prescribe stepwise therapy with close follow-up for symptom control.",
        },
      ],
      supportImage: "/images/service-detail/urticaria-support.jpg",
    },
  },
  {
    slug: "prp",
    title: "PRP",
    category: "hair",
    shortDescription: "Platelet-rich plasma sessions for scalp nourishment and follicle stimulation.",
    content: {
      overview: "PRP (Platelet-Rich Plasma) therapy uses concentrated growth factors from your own blood to nourish the scalp and stimulate hair follicles. It is one of the most well-researched non-surgical hair restoration treatments available.",
      sections: [
        {
          heading: "How PRP Works",
          body: "A small amount of blood is drawn, centrifuged to concentrate platelets, and then injected into the scalp at targeted areas. The growth factors in PRP stimulate dormant follicles, improve blood supply, and enhance hair quality.",
        },
        {
          heading: "Best Suited For",
          body: "Early to moderate hair thinning, diffuse hair loss, and as an adjunct to hair transplant procedures for improved graft survival and faster growth.",
        },
      ],
      benefits: ["Uses your own blood — natural treatment", "Stimulates hair growth", "Improves hair quality and thickness", "Enhances transplant outcomes", "Minimal downtime"],
      supportImage: "/images/service-detail/prp-support.jpg",
      faqs: [
        { q: "How many PRP sessions are needed?", a: "Typically 4-6 sessions spaced 3-4 weeks apart, followed by maintenance sessions every 3-6 months." },
        { q: "Is PRP painful?", a: "Topical numbing is applied before the procedure. Most patients experience only mild discomfort during injections." },
      ],
    },
  },
  {
    slug: "gfc",
    title: "GFC",
    category: "hair",
    shortDescription: "Growth factor concentrate protocols for clinically guided hair restoration.",
    content: {
      overview: "GFC (Growth Factor Concentrate) is an advanced hair restoration therapy that delivers a higher concentration of growth factors compared to traditional PRP, enhancing the follicular environment for improved hair growth.",
      sections: [
        {
          heading: "How GFC Differs from PRP",
          body: "GFC isolates and concentrates specific growth factors without red and white blood cells, reducing inflammation at injection sites and delivering a purer, more potent treatment to hair follicles.",
        },
        {
          heading: "Clinical Use",
          body: "Integrated in structured sessions based on detailed scalp analysis. GFC can be used as a standalone treatment or combined with other therapies for comprehensive hair restoration.",
        },
      ],
      benefits: ["Higher growth factor concentration", "Reduced injection site inflammation", "Enhanced follicle stimulation", "Can combine with other treatments"],
      supportImage: "/images/service-detail/gfc-support.jpg",
      faqs: [
        { q: "Is GFC better than PRP?", a: "GFC offers a more concentrated and refined growth factor delivery. Your dermatologist will recommend the best option based on your specific hair loss pattern." },
        { q: "How many sessions are needed?", a: "Typically 3-4 sessions spaced 3-4 weeks apart, with periodic maintenance sessions." },
      ],
    },
  },
  {
    slug: "qr678",
    title: "QR678",
    category: "hair",
    shortDescription: "Targeted injectable therapy for reducing hair fall and improving density.",
    content: {
      overview: "QR678 is a patented, scientifically developed injectable solution containing a cocktail of growth factors and peptides specifically designed for hair follicle stimulation. It is used in selected candidates as part of multi-modality hair management.",
      sections: [
        {
          heading: "Treatment Protocol",
          body: "Sessions are customized with periodic reassessment. QR678 is typically administered as a series of mesotherapy injections into the scalp at targeted areas of thinning.",
        },
        {
          heading: "Who Benefits",
          body: "Patients with androgenetic alopecia, diffuse thinning, and those not ready for or supplementing hair transplantation.",
        },
      ],
      benefits: ["Targeted follicle stimulation", "Patented formulation", "Reduces hair fall", "Improves density"],
      supportImage: "/images/service-detail/qr678-support.jpg",
      faqs: [
        { q: "How many QR678 sessions are needed?", a: "Typically 6-8 sessions with periodic reassessment to track progress and adjust the treatment plan." },
        { q: "Can QR678 be combined with PRP?", a: "Yes, combining QR678 with PRP or GFC can enhance overall treatment outcomes." },
      ],
    },
  },
  {
    slug: "exosomes",
    title: "Exosomes",
    category: "hair",
    shortDescription: "Advanced regenerative scalp therapy for selected hair loss patterns.",
    content: {
      overview: "Exosome-assisted therapy represents the cutting edge of regenerative medicine for hair restoration. Exosomes are nano-sized vesicles containing growth factors, proteins, and genetic material that promote cellular regeneration and hair follicle rejuvenation.",
      sections: [
        {
          heading: "How Exosome Therapy Works",
          body: "Exosomes are delivered to the scalp through microneedling or injection. They communicate with hair follicle cells at a molecular level, promoting growth, reducing inflammation, and extending the active growth phase of hair.",
        },
        {
          heading: "Suitability Assessment",
          body: "Suitability is decided after thorough clinical and trichoscopic assessment. Exosome therapy is recommended for selected candidates who may benefit from advanced regenerative approaches.",
        },
      ],
      benefits: ["Advanced regenerative technology", "Promotes cellular rejuvenation", "Reduces scalp inflammation", "Can extend hair growth phase"],
      supportImage: "/images/service-detail/exosomes-support.jpg",
      faqs: [
        { q: "Is exosome therapy proven?", a: "Exosome therapy is an emerging advanced treatment with promising clinical results. Our dermatologist will discuss expected outcomes based on your specific case." },
        { q: "How is it administered?", a: "Exosomes are delivered through microneedling or direct injection into the scalp under controlled clinical conditions." },
      ],
    },
  },
  {
    slug: "low-level-laser-therapy",
    title: "Low-Level Laser Therapy",
    category: "hair",
    shortDescription: "Non-invasive light-based support treatment for hair growth cycles.",
    content: {
      overview: "LLLT (Low-Level Laser Therapy) uses specific wavelengths of light to stimulate cellular activity in hair follicles, improving blood flow and nutrient delivery to support hair growth cycles. It is a painless, non-invasive treatment.",
      sections: [
        {
          heading: "How LLLT Helps",
          body: "The laser light energizes cells in the hair follicle, extending the growth phase and reducing the resting phase of hair. This leads to thicker, stronger hair over time.",
        },
        {
          heading: "Who Benefits",
          body: "Early-stage thinning, post-transplant recovery support, and patients seeking a non-invasive complement to other hair restoration treatments.",
        },
      ],
      benefits: ["Non-invasive and painless", "Improves follicular function", "Supports other treatments", "No side effects", "Convenient sessions"],
      supportImage: "/images/service-detail/lllt-support.jpg",
      faqs: [
        { q: "How often should I get LLLT?", a: "Sessions are typically recommended 2-3 times per week initially, with frequency reducing as results are achieved." },
        { q: "Can LLLT be used with PRP or GFC?", a: "Yes, LLLT complements injectable treatments like PRP and GFC for enhanced hair restoration outcomes." },
      ],
    },
  },
  {
    slug: "acne-scar-reduction",
    title: "Scar Reduction",
    category: "aesthetics",
    shortDescription: "Multi-modal scar revision using peels, microneedling and device-based protocols.",
    content: {
      highlightText: "Don't Let Acne Scars Tell Your Story",
      leadCta: {
        label: "Book Your Consultation",
        to: "/contact#booking-form-section",
      },
      overview:
        "Acne, if left untreated, can leave scars which are considered permanent. Some individuals are left with depressions and uneven textured skin, and creams do not work on those scars. Treatments like Fractional CO2, MNRF, subcision, and microneedling can help reduce the depth and appearance of scars.",
      sections: [
        {
          heading: "Advanced MNRF Treatment",
          body: "At Skin Sattva Skin & Hair Clinic, we offer advanced Microneedling Radiofrequency (MNRF) treatment to improve acne scars safely and effectively. Using the advanced Cellina-PR MNRF system, we target scars deep within the skin to stimulate collagen remodeling and smoothen the skin surface.",
        },
        {
          heading: "Advanced Technology: Cellina-PR MNRF",
          body: "Scar treatments are performed using the Cellina-PR Microneedling Radiofrequency (MNRF) system, designed to treat acne scars with high precision and controlled energy delivery.",
        },
        {
          heading: "Who Can Benefit?",
          body: "MNRF is suitable for patients with acne scars such as rolling and boxcar scars, enlarged pores, uneven skin texture, early skin laxity, and stretch marks.",
        },
      ],
      pointSections: [
        {
          heading: "Don't Let Acne Scars Tell Your Story",
          points: [
            "Acne, if left untreated, can leave scars which are considered permanent.",
            "Some individuals are left with depressions and uneven textured skin.",
            "No creams will work on those scars.",
            "Treatments like Fractional CO2, MNRF, subcision, and microneedling can help reduce the depth and appearance of scars.",
            "At Skin Sattva Skin & Hair Clinic, advanced Microneedling Radiofrequency (MNRF) treatment is used to improve acne scars safely and effectively.",
          ],
        },
        {
          heading: "Machine Highlight: Cellina-PR MNRF System",
          points: [
            "Skin Sattva uses the advanced Cellina-PR MNRF system.",
            "The machine targets scars deep within the skin.",
            "It stimulates collagen remodeling.",
            "It helps smoothen the skin surface.",
            "Scar treatments are performed with high precision and controlled energy delivery.",
          ],
        },
        {
          heading: "Advanced Technology: Cellina-PR MNRF",
          points: [
            "Cellina-PR Microneedling Radiofrequency (MNRF) is designed to treat acne scars with high precision.",
            "Controlled Depth and Intensity: the device allows precise adjustment of needle depth.",
            "Controlled Depth and Intensity: RF intensity can be customized based on scar type and depth.",
            "RF Subcision Technology: Cellina-PR delivers radiofrequency-assisted subcision.",
            "RF Subcision Technology helps break fibrous scar bands beneath the skin that pull scars downward.",
            "This releases the scar and allows smoother skin remodeling.",
          ],
        },
        {
          heading: "How MNRF Improves Scars",
          points: [
            "Microneedling RF works through two powerful mechanisms.",
            "Microneedling stimulation: tiny insulated needles create micro-channels.",
            "These micro-channels trigger the skin's natural healing response.",
            "Radiofrequency energy: RF heat is delivered deep into the dermis.",
            "RF heat stimulates collagen and elastin production.",
            "This gradually improves scar depth and skin texture.",
            "Over time, the process rebuilds skin structure and smoothens depressed scars.",
          ],
        },
        {
          heading: "Important Advantages of MNRF Treatment",
          points: [
            "Effective treatment for deep acne scars.",
            "RF subcision helps release deep scar bands.",
            "Less downtime compared to fractional CO2 laser.",
            "Safe for Indian skin types with lower risk of pigmentation.",
            "Improves skin texture and firmness.",
            "With a proper treatment plan, up to 60-70% improvement in acne scars can be achieved.",
          ],
        },
        {
          heading: "Number of Sessions Required",
          points: [
            "Scar improvement is gradual and requires multiple sessions.",
            "Most patients need 4-6 sessions.",
            "Sessions are spaced 4-6 weeks apart for optimal results.",
            "The exact number depends on the type and severity of scars.",
          ],
        },
        {
          heading: "Downtime After Treatment",
          points: [
            "MNRF involves minimal downtime compared to CO2 laser resurfacing.",
            "Most individuals can resume normal activities within 24-48 hours.",
          ],
        },
        {
          heading: "Who Can Benefit?",
          points: [
            "Patients with acne scars can benefit.",
            "Rolling scars and boxcar scars can be treated.",
            "Enlarged pores can be improved.",
            "Uneven skin texture can be improved.",
            "Early skin laxity can be treated.",
            "Stretch marks can also be treated.",
          ],
        },
        {
          heading: "Book Your Consultation",
          points: [
            "If acne scars are affecting your confidence, advanced dermatology treatments can significantly improve skin texture.",
            "Visit Skin Sattva Skin & Hair Clinic for personalized scar reduction treatments.",
            "Start your journey toward smoother, healthier skin today.",
          ],
        },
      ],
      benefits: ["Cellina-PR MNRF system", "RF subcision technology", "Deep acne scar improvement", "Less downtime than CO2 laser", "Safe for Indian skin types", "Up to 60-70% improvement with a proper plan"],
      supportImage: "/images/service-detail/scar-reduction-support.jpg",
      beforeAfterImages: [
        { src: "/images/service-detail/scar-ba-1.jpg", alt: "Scar reduction before and after result 1" },
        { src: "/images/service-detail/scar-ba-2.jpg", alt: "Scar reduction before and after result 2" },
        { src: "/images/service-detail/scar-ba-3.jpg", alt: "Scar reduction before and after result 3" },
      ],
    },
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "aesthetics",
    shortDescription: "Controlled exfoliation for acne, pigmentation, and texture improvement.",
    content: {
      overview: "Chemical peels use medical-grade solutions to exfoliate the dead skin layer, control oil secretion, decrease melanin content, and rejuvenate skin for an even tone and texture. At Skin Sattva, peels are customized to your skin type and concern.",
      sections: [
        {
          heading: "How Chemical Peels Work",
          body: "Chemical peeling helps in exfoliating the dead skin layer and decreases oil secretion, which helps in faster control of acne. It clears out acne from within the pores, decreases melanin content causing pigmentation, and reduces the appearance of new acne.",
        },
        {
          heading: "Types of Peels",
          body: "We offer superficial, medium, and deep peels based on skin concern. Options include glycolic acid, salicylic acid, lactic acid, and combination peels — each selected after thorough skin assessment.",
        },
      ],
      benefits: ["Exfoliates dead skin layer", "Decreases oil secretion", "Clears acne from within pores", "Reduces pigmentation", "Rejuvenates skin tone and texture", "Safe and effective"],
      supportImage: "/images/service-detail/chemical-peels-support.jpg",
      faqs: [
        { q: "Is there downtime after a chemical peel?", a: "Mild peeling may occur for 2-4 days depending on peel depth. Most patients resume daily activities immediately after superficial peels." },
        { q: "How often should I get chemical peels?", a: "Typically every 2-4 weeks depending on the peel type and your skin's response. A treatment plan is created after consultation." },
      ],
    },
  },
  {
    slug: "vampire-facial",
    title: "Vampire Facial",
    category: "aesthetics",
    shortDescription: "Regenerative facial protocol for texture, glow, and collagen support.",
    content: {
      overview: "The Vampire Facial combines microneedling with PRP (Platelet-Rich Plasma) derived from your own blood. This regenerative protocol stimulates collagen production, improves skin texture, and delivers a natural, youthful glow.",
      sections: [
        {
          heading: "The Procedure",
          body: "A small amount of your blood is drawn, processed to extract platelet-rich plasma, and then applied to the skin during microneedling. This combination enhances absorption of growth factors deep into the skin.",
        },
        {
          heading: "Expected Outcomes",
          body: "Improved skin texture, reduced fine lines, smaller pores, and a natural glow. Results develop over weeks as collagen remodeling occurs, with optimal outcomes after multiple sessions.",
        },
      ],
      benefits: ["Natural rejuvenation using your own blood", "Collagen stimulation", "Improved skin texture", "Reduced fine lines and pores", "Minimal downtime"],
      supportImage: "/images/service-detail/vampire-facial-support.jpg",
      faqs: [
        { q: "Is the Vampire Facial safe?", a: "Yes, since it uses your own blood-derived PRP, the risk of allergic reactions is minimal. The procedure is performed under sterile conditions." },
        { q: "How many sessions are recommended?", a: "Typically 3-4 sessions spaced 4-6 weeks apart for optimal results, with maintenance sessions every 6-12 months." },
      ],
    },
  },
  {
    slug: "oxygeneo-facial",
    title: "Oxygeneo Facial",
    category: "aesthetics",
    shortDescription: "Advanced oxygen-based facial for hydration and immediate radiance.",
    content: {
      overview: "The Oxygeneo Facial is a comfortable, advanced medi-facial that combines exfoliation, oxygenation, and infusion of active ingredients for instant freshness and glow. It is perfect for dull, dehydrated skin needing an immediate boost.",
      sections: [
        {
          heading: "Three-in-One Technology",
          body: "Oxygeneo works through three simultaneous actions: gentle exfoliation to remove dead cells, natural oxygenation from within the skin, and infusion of revitalizing nutrients and active ingredients for deep nourishment.",
        },
        {
          heading: "Best For",
          body: "Dull skin, event preparation, dehydration, and anyone looking for supervised rejuvenation with zero downtime. Results are visible immediately after the first session.",
        },
      ],
      benefits: ["Immediate glow and radiance", "Deep hydration", "No downtime", "Comfortable procedure", "Suitable for all skin types"],
      supportImage: "/images/service-detail/oxygeneo-support.jpg",
      faqs: [
        { q: "How soon will I see results?", a: "Results are visible immediately after the session. Skin appears brighter, more hydrated, and glowing." },
        { q: "Can I get an Oxygeneo facial before an event?", a: "Yes, it is an excellent pre-event treatment with no downtime, redness, or peeling." },
      ],
    },
  },
  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    category: "aesthetics",
    shortDescription: "Doctor-led injectable rejuvenation for lines, contour, and facial harmony.",
    content: {
      overview: "Botox and dermal fillers are minimally invasive anti-aging treatments administered with medical precision at Skin Sattva. Botox relaxes muscles causing wrinkles, while fillers restore volume and enhance facial contours for a natural, refreshed appearance.",
      sections: [
        {
          heading: "Botox (Botulinum Toxin)",
          body: "Botox is used to treat dynamic wrinkles — forehead lines, crow's feet, and frown lines. It works by temporarily relaxing the muscles that cause these wrinkles, resulting in smoother skin. Results last 4-6 months.",
        },
        {
          heading: "Dermal Fillers",
          body: "Fillers restore lost volume in areas like cheeks, lips, nasolabial folds, and under-eyes. They can also enhance jawline definition and improve overall facial harmony. Results are immediate and can last 12-18 months.",
        },
        {
          heading: "Our Approach",
          body: "Natural results-focused dosing and placement strategy. We believe in subtle enhancement that preserves your natural expressions while addressing specific concerns.",
        },
      ],
      benefits: ["Immediate visible results", "Minimal downtime", "Natural-looking enhancement", "Precise dosing", "Reversible (fillers)"],
      supportImage: "/images/service-detail/botox-support.png",
      beforeAfterImages: [
        { src: "/images/service-detail/botox-ba-1.jpg", alt: "Botox before and after result 1" },
        { src: "/images/service-detail/botox-ba-2.jpg", alt: "Botox before and after result 2" },
        { src: "/images/service-detail/botox-ba-3.png", alt: "Botox crow's feet before and after" },
        { src: "/images/service-detail/botox-ba-4.jpg", alt: "Botox forehead before and after" },
      ],
      faqs: [
        { q: "Is Botox safe?", a: "Yes, Botox has been FDA-approved and used safely for decades. When administered by a qualified dermatologist, it is very safe with minimal side effects." },
        { q: "Will I look 'frozen' or unnatural?", a: "Our approach focuses on natural results. We use precise dosing to smooth wrinkles while maintaining natural facial expressions." },
        { q: "How long do results last?", a: "Botox typically lasts 4-6 months, while fillers can last 12-18 months depending on the product and area treated." },
      ],
    },
  },
  {
    slug: "threadlift",
    title: "Threadlift",
    category: "aesthetics",
    shortDescription: "Non-surgical lifting protocol for contour enhancement and skin support.",
    content: {
      overview: "A threadlift is a minimally invasive alternative to a facelift that uses dissolvable threads to lift and tighten sagging skin. It provides structural support and stimulates collagen production for progressive improvement.",
      sections: [
        {
          heading: "How It Works",
          body: "Biocompatible threads are inserted under the skin using fine needles. These threads provide immediate lifting while also stimulating your body's natural collagen production over the following months for sustained improvement.",
        },
        {
          heading: "Result Profile",
          body: "Subtle, natural lifting with improved jawline definition, cheek contour, and neck appearance. Results develop over 2-3 months as collagen builds around the threads.",
        },
      ],
      benefits: ["Non-surgical lifting", "Minimal downtime", "Collagen stimulation", "Natural-looking results", "Quick procedure"],
      supportImage: "/images/service-detail/threadlift-support.jpg",
      faqs: [
        { q: "How long does a threadlift last?", a: "Results typically last 12-18 months. The threads dissolve naturally, but the collagen produced provides continued benefit." },
        { q: "Is there downtime?", a: "Minimal downtime — most patients return to normal activities within 2-3 days. Some swelling or bruising may occur temporarily." },
      ],
    },
  },
  {
    slug: "rf-facelift",
    title: "RF Facelift",
    category: "aesthetics",
    shortDescription: "Radiofrequency skin tightening for firmness and rejuvenation.",
    content: {
      overview: "RF (Radiofrequency) facelift is a non-invasive device-based treatment that uses radiofrequency energy to heat the deeper layers of skin, stimulating collagen production and tightening loose skin for a firmer, more youthful appearance.",
      sections: [
        {
          heading: "How RF Works",
          body: "Radiofrequency energy penetrates the skin to heat the collagen-rich dermis layer. This controlled heating causes immediate collagen contraction and stimulates new collagen production over weeks, resulting in progressive skin tightening.",
        },
        {
          heading: "Ideal Concerns",
          body: "Mild to moderate skin laxity, jowling, texture changes, and tone improvement. RF is effective for both face and body areas including neck, arms, and abdomen.",
        },
      ],
      benefits: ["Non-invasive tightening", "Stimulates collagen production", "No downtime", "Progressive improvement", "Face and body treatment"],
      supportImage: "/images/service-detail/rf-facelift-support.jpg",
      faqs: [
        { q: "How many RF sessions are needed?", a: "Typically 4-6 sessions are recommended, spaced 2-4 weeks apart. Results continue to improve for several months after the last session." },
        { q: "Is RF treatment painful?", a: "Most patients experience a comfortable warming sensation. The procedure is well-tolerated without the need for anaesthesia." },
      ],
    },
  },
  {
    slug: "hifu",
    title: "HIFU",
    category: "aesthetics",
    shortDescription: "Focused ultrasound based lifting for jawline and facial contour enhancement.",
    content: {
      overview: "HIFU (High-Intensity Focused Ultrasound) is a non-surgical lifting treatment that targets deep tissue layers to tighten and lift skin. It is particularly effective for jawline definition, brow lifting, and overall facial contouring.",
      sections: [
        {
          heading: "How HIFU Works",
          body: "HIFU delivers focused ultrasound energy to precise depths beneath the skin, targeting the SMAS layer — the same layer addressed in surgical facelifts. This stimulates deep collagen regeneration for natural lifting.",
        },
        {
          heading: "Benefits and Results",
          body: "Non-surgical lift support with minimal downtime. Results develop over 2-3 months as collagen rebuilds, with effects lasting up to 12-18 months. Ideal for patients seeking lifting without surgery.",
        },
      ],
      benefits: ["Non-surgical facelift effect", "Targets deep tissue layers", "Jawline and contour definition", "Minimal downtime", "Long-lasting results"],
      supportImage: "/images/service-detail/hifu-support.jpg",
      faqs: [
        { q: "How long do HIFU results last?", a: "Results can last 12-18 months. Annual maintenance sessions help sustain the lifting effect." },
        { q: "Is HIFU painful?", a: "Some patients feel warmth and occasional prickling during the procedure. Discomfort is temporary and manageable." },
      ],
    },
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    category: "aesthetics",
    shortDescription: "Collagen induction therapy for scars, pores, and texture correction.",
    content: {
      overview: "Microneedling (Collagen Induction Therapy) creates controlled micro-injuries in the skin to stimulate the body's natural wound-healing process, resulting in increased collagen and elastin production for smoother, firmer skin.",
      sections: [
        {
          heading: "What It Treats",
          body: "Acne scars, enlarged pores, fine lines, stretch marks, and general skin texture irregularities. It can also enhance the absorption of topical treatments like PRP, growth factors, and serums.",
        },
        {
          heading: "Our Approach",
          body: "We use medical-grade microneedling devices with adjustable needle depths for precision treatment. Depth and intensity are customized based on the concern being treated and the area of the body.",
        },
      ],
      benefits: ["Collagen stimulation", "Scar improvement", "Reduced pore size", "Enhanced product absorption", "Suitable for face and body"],
      supportImage: "/images/service-detail/microneedling-support.jpg",
      faqs: [
        { q: "How many microneedling sessions are needed?", a: "Typically 3-6 sessions spaced 4-6 weeks apart. For deeper scars, more sessions may be recommended." },
        { q: "Is there downtime after microneedling?", a: "Mild redness similar to sunburn may persist for 1-2 days. Most patients resume normal activities the next day." },
      ],
    },
  },
  {
    slug: "stretchmarks-treatment",
    title: "Stretchmarks Treatment",
    category: "aesthetics",
    shortDescription: "Combined dermatology protocols to improve stretch mark appearance.",
    content: {
      overview: "Stretch marks occur when skin is stretched rapidly due to growth, pregnancy, or weight changes. Skin Sattva uses combination protocols including microneedling, fractional lasers, and topical treatments to improve texture and visibility.",
      sections: [
        {
          heading: "Treatment Protocol",
          body: "Session-based care combines multiple modalities based on stretch mark stage (red/new vs white/old) and skin type. Newer stretch marks respond more quickly, while older marks require more intensive combination therapy.",
        },
        {
          heading: "Expected Results",
          body: "Significant improvement in texture, color, and visibility over multiple sessions. While complete removal is not possible, substantial improvement is achievable with consistent treatment.",
        },
      ],
      benefits: ["Improved texture and appearance", "Multiple treatment options", "Both new and old stretch marks", "Safe protocols"],
      supportImage: "/images/service-detail/stretchmarks-support.jpg",
      faqs: [
        { q: "Can stretch marks be completely removed?", a: "While complete removal is difficult, significant improvement in texture and visibility is achievable. Newer stretch marks respond better to treatment." },
        { q: "How many sessions are needed?", a: "Typically 4-8 sessions depending on the age and severity of stretch marks." },
      ],
    },
  },
  {
    slug: "double-chin-reduction",
    title: "Double Chin Reduction",
    category: "aesthetics",
    shortDescription: "Non-surgical contouring options for submental fullness reduction.",
    content: {
      overview: "Double chin (submental fullness) can be addressed through non-surgical aesthetic contouring at Skin Sattva. Our approach improves jawline definition and facial profile without surgical intervention.",
      sections: [
        {
          heading: "Treatment Options",
          body: "Technique depends on tissue quality and contour goals. Options may include RF-based contouring, HIFU for deep tissue tightening, and targeted fat reduction protocols.",
        },
        {
          heading: "Who Benefits",
          body: "Anyone bothered by excess fullness under the chin that does not respond to diet and exercise. A consultation determines the most effective treatment approach.",
        },
      ],
      benefits: ["Non-surgical approach", "Improved jawline definition", "Better facial profile", "Minimal downtime"],
      supportImage: "/images/service-detail/threadlift-support.jpg",
      faqs: [
        { q: "How long do results take?", a: "Results develop gradually over weeks as the body processes treated tissue. Optimal results are typically seen after 2-3 months." },
        { q: "Is the procedure permanent?", a: "Results are long-lasting when maintained with a healthy lifestyle. Significant weight gain may affect results." },
      ],
    },
  },
  {
    slug: "pigmentation-reduction",
    title: "Pigmentation Reduction",
    category: "aesthetics",
    shortDescription: "Laser and peel-based protocols for melasma and uneven tone management.",
    content: {
      highlightText: "Clearer Skin Starts Here",
      leadCta: {
        label: "Book Your Consultation",
        to: "/contact#booking-form-section",
      },
      overview:
        "Advanced Pigmentation Reduction at Skin Sattva is designed to safely reduce dark patches and restore a clearer, healthier complexion. Excess melanin can lead to dark spots, melasma, acne marks, and uneven skin tone, making skin appear dull and tired. These concerns often develop due to sun exposure, acne, hormonal changes, or aging.",
      sections: [
        {
          heading: "What Causes Pigmentation?",
          body: "Pigmentation occurs when the skin produces excess melanin, leading to dark patches or uneven skin tone. Common concerns include melasma, acne marks (post-inflammatory pigmentation), sun spots and tanning, freckles, and uneven skin tone.",
        },
        {
          heading: "Our Approach",
          body: "At Skin Sattva, we analyse the skin and curate the right treatment plan for the underlying pigmentation. Our approach combines good routine skin care, medical treatments, and advanced lasers.",
        },
        {
          heading: "Expected Results",
          body: "With the right treatment plan, patients can experience reduction in dark spots and patches, brighter clearer skin, more even skin tone, improved skin texture, and healthy skin glow. Results develop gradually over multiple sessions for safe and lasting improvement. About 5-6 sessions are required to see the desired results.",
        },
      ],
      pointSections: [
        {
          heading: "Advanced Pigmentation Reduction at Skin Sattva",
          points: [
            "Melanin is a pigment normally present in our skin which gives a unique skin color.",
            "When melanin becomes excess, dark spots, melasma, acne marks, and uneven skin tone can make skin appear dull and tired.",
            "These concerns often develop due to sun exposure, acne, hormonal changes, or aging.",
            "At Skin Sattva Skin & Hair Clinic, Davanagere, advanced treatments are designed to safely reduce dark patches.",
            "The treatment helps restore a clearer, healthier complexion.",
            "The approach combines good routine skin care, medical treatments, and advanced lasers.",
          ],
        },
        {
          heading: "What Causes Pigmentation?",
          points: [
            "Pigmentation occurs when the skin produces excess melanin.",
            "Excess melanin leads to dark patches or uneven skin tone.",
            "Common concerns include melasma.",
            "Common concerns include acne marks or post-inflammatory pigmentation.",
            "Common concerns include sun spots and tanning.",
            "Common concerns include freckles.",
            "Common concerns include uneven skin tone.",
          ],
        },
        {
          heading: "Personalized Treatment Planning",
          points: [
            "At Skin Sattva, the skin is analysed before planning pigmentation treatment.",
            "The right treatment plan is curated based on the underlying pigmentation.",
            "Treatment options include chemical peels.",
            "Treatment options include skin polishing.",
            "Treatment options include Q Switched Nd:YAG laser.",
            "Treatment options include lightening medifacials.",
            "Treatment options include microneedling face PRP.",
            "Treatment options include Exosomes.",
          ],
        },
        {
          heading: "Chemical Peels",
          points: [
            "Imported Mediderma peels are used.",
            "These peels are gentle on the skin but highly effective in reducing pigmentation.",
            "Basic peels include glycolic, lactic, and salicylic peels.",
            "Advanced peels include NMF, Yellow peel, and black peel.",
            "Cosmelan peel is available for resistant melasma.",
            "Peel selection depends upon the condition.",
          ],
        },
        {
          heading: "Q-Switched Laser Toning",
          points: [
            "Tanning, melasma, and acne spots can be reduced using Pastelle SE Q Switched Nd:YAG Laser.",
            "This next-generation laser technology precisely targets excess pigment.",
            "The surrounding skin is kept safe during treatment.",
            "The treatment is personally done by the Dermatologist with utmost care and precision.",
          ],
        },
        {
          heading: "Key Advantages of Laser Technology",
          points: [
            "PTP Mode (Photoacoustic Twin Pulse) breaks down pigment particles using ultra-short twin pulses.",
            "PTP Mode uses minimal heat, reducing the risk of irritation or post-treatment pigmentation.",
            "Top-Hat Beam Technology delivers uniform laser energy across the skin surface.",
            "Top-Hat Beam Technology prevents hot spots.",
            "It ensures safer treatments for Indian skin types.",
            "It allows effective pigmentation reduction with minimal downtime and excellent safety.",
          ],
        },
        {
          heading: "Medi-Facials for Skin Brightening",
          points: [
            "Skin Sattva offers high-quality medi-facials curated by Dr Shrenik.",
            "These treatments help improve skin brightness, hydration, and glow.",
            "They support pigmentation treatment.",
            "The treatment uses Korean machines.",
            "Lightening serums are infused into the skin.",
            "Dead skin is gently exfoliated to give a healthy glow.",
            "It is best suited for dull skin with mild pigmentation.",
            "It is a good option before an upcoming event.",
          ],
        },
        {
          heading: "PDRN and Exosomes",
          points: [
            "Skin Sattva incorporates advanced skin regenerative therapies such as PDRN and Exosomes.",
            "These therapies enhance pigmentation treatment outcomes.",
            "PDRN (Polydeoxyribonucleotide) helps repair damaged skin.",
            "PDRN helps reduce inflammation.",
            "PDRN improves overall skin quality.",
            "PDRN supports gradual lightening of pigmentation and improves skin radiance.",
            "Exosome therapy delivers powerful cellular signals.",
            "Exosomes promote skin regeneration.",
            "Exosomes improve collagen production.",
            "Exosomes help restore a healthier, brighter skin tone.",
          ],
        },
        {
          heading: "Why Choose Skin Sattva?",
          points: [
            "Customised high quality treatments.",
            "Advanced Korean Pastelle-SE laser for pigmentation.",
            "Safe protocols for Indian skin types.",
            "Professional and luxurious environment.",
          ],
        },
        {
          heading: "Expected Results",
          points: [
            "Reduction in dark spots and patches.",
            "Brighter, clearer skin.",
            "More even skin tone.",
            "Improved skin texture.",
            "Healthy skin glow.",
            "Results develop gradually over multiple sessions for safe and lasting improvement.",
            "About 5-6 sessions are required to see the desired results.",
          ],
        },
      ],
      benefits: ["Reduction in dark spots and patches", "Brighter clearer skin", "More even skin tone", "Improved skin texture", "Healthy skin glow", "Safe protocols for Indian skin types"],
      supportImage: "/images/service-detail/pigmentation-support.jpg",
      beforeAfterImages: [
        { src: "/images/service-detail/pigmentation-ba-1.jpg", alt: "Pigmentation reduction before and after result 1" },
        { src: "/images/service-detail/pigmentation-ba-2.jpg", alt: "Pigmentation reduction before and after result 2" },
      ],
    },
  },
  {
    slug: "skin-tag-removal",
    title: "Skin Tag Removal",
    category: "dermatosurgery",
    shortDescription: "Quick minor procedure for cosmetically bothersome skin tags.",
    content: {
      overview: "Skin tags are harmless soft growths that commonly appear on the neck, underarms, and eyelids. At Skin Sattva, removal is quick, safe, and performed in a single outpatient visit with minimal downtime.",
      sections: [
        {
          heading: "Procedure",
          body: "Technique is chosen based on the tag's size and location. Small tags may be removed with simple excision, while larger ones may require electrocautery or radiofrequency for clean removal.",
        },
      ],
      benefits: ["Quick outpatient procedure", "Minimal downtime", "Clean cosmetic removal", "No stitches needed (most cases)"],
      supportImage: "/images/service-detail/skin-tag-support.jpg",
      faqs: [
        { q: "Do skin tags grow back after removal?", a: "Removed skin tags do not grow back. However, new skin tags may develop in other areas over time." },
        { q: "Is the procedure painful?", a: "A small amount of local anaesthesia is used. The procedure itself is quick and well-tolerated." },
      ],
    },
  },
  {
    slug: "vitiligo-surgery",
    title: "Vitiligo Surgery",
    category: "dermatosurgery",
    shortDescription: "Surgical options for stable vitiligo in selected candidates.",
    content: {
      overview: "For stable vitiligo that has not responded adequately to medical treatment, surgical options can support repigmentation. Dr. Shrenik has expertise in ultrathin epidermal grafting, suction blister, and mini punch grafting.",
      sections: [
        {
          heading: "Surgical Techniques",
          body: "Ultrathin epidermal grafting, suction blister grafting, and mini punch grafting are the primary techniques. The choice depends on patch size, location, and patient preference.",
        },
        {
          heading: "Who Is Eligible",
          body: "Candidates must have stable vitiligo (no new patches or spread for at least 6-12 months) and have not responded sufficiently to medical treatments like phototherapy.",
        },
      ],
      benefits: ["Repigmentation of stable patches", "Multiple technique options", "Expert surgical skill", "Combined with post-surgical phototherapy"],
      supportImage: "/images/service-detail/dermatosurgery-support.jpg",
      faqs: [
        { q: "What is the success rate of vitiligo surgery?", a: "Success rates vary based on technique and patch location. Many patients achieve significant repigmentation enhanced by post-surgical phototherapy." },
        { q: "How stable should vitiligo be for surgery?", a: "Vitiligo should be stable — no new patches or spread — for at least 6-12 months before surgical intervention is considered." },
      ],
    },
  },
  {
    slug: "cyst-excision",
    title: "Cyst Excision",
    category: "dermatosurgery",
    shortDescription: "Minor surgical removal of cysts with dermatology precision.",
    content: {
      overview: "Cyst excision is a dermatology-led surgical procedure for safe, complete removal of skin cysts. The procedure includes wound care guidance for optimal healing.",
      sections: [
        {
          heading: "Procedure",
          body: "Performed under local anaesthesia, the cyst is carefully excised along with its capsule to minimize recurrence. Sutures may be required depending on cyst size and location.",
        },
      ],
      benefits: ["Complete cyst removal", "Low recurrence rate", "Performed under local anaesthesia", "Healing guidance provided"],
      supportImage: "/images/service-detail/cyst-excision-support.jpg",
      faqs: [
        { q: "Can cysts come back after excision?", a: "When the complete cyst capsule is removed, recurrence is uncommon. Incomplete removal may lead to regrowth." },
      ],
    },
  },
  {
    slug: "punch-excision",
    title: "Punch Excision",
    category: "dermatosurgery",
    shortDescription: "Targeted punch-based removal for selected lesions and scars.",
    content: {
      overview: "Punch excision is a precise dermatosurgical technique using a circular blade to remove selected skin lesions and deep scars. It is particularly effective for ice-pick acne scars.",
      sections: [
        {
          heading: "Application",
          body: "Applied when lesion size and location are suitable for punch-based removal. The technique creates a clean wound that heals with minimal scarring.",
        },
      ],
      benefits: ["Precise removal", "Minimal scarring", "Effective for deep scars", "Quick procedure"],
      supportImage: "/images/service-detail/punch-excision-support.jpg",
      faqs: [
        { q: "Is punch excision suitable for all scars?", a: "Punch excision is best for ice-pick and small, deep scars. Your dermatologist will assess whether this technique is appropriate." },
      ],
    },
  },
  {
    slug: "punch-biopsy",
    title: "Punch Biopsy",
    category: "dermatosurgery",
    shortDescription: "Diagnostic dermatology biopsy for accurate skin condition evaluation.",
    content: {
      overview: "A punch biopsy is a quick diagnostic procedure where a small cylindrical sample of skin is taken for histopathological examination to confirm diagnosis and guide treatment.",
      sections: [
        {
          heading: "Why Biopsy Is Important",
          body: "When clinical examination alone cannot provide a definitive diagnosis, a punch biopsy provides tissue for microscopic analysis. This is crucial for confirming conditions like psoriasis, lichen planus, vasculitis, and suspected skin concerns.",
        },
      ],
      benefits: ["Accurate diagnosis", "Quick outpatient procedure", "Guides treatment planning", "Minimal scarring"],
      supportImage: "/images/service-detail/punch-biopsy-support.jpg",
      faqs: [
        { q: "Is a punch biopsy painful?", a: "Local anaesthesia is administered before the procedure, making it virtually painless. A small wound heals within 7-10 days." },
        { q: "How long do biopsy results take?", a: "Histopathology results are typically available within 5-7 working days." },
      ],
    },
  },
];

const documentServiceContentOverrides = {
  "acne-control-therapy": {
    overview:
      "Acne is a skin disorder affecting both males and females usually between 15-30 years of age, but it can affect or appear at any age. It is mainly seen on the face followed by the chest, back, and arms. It happens due to increased oil secretion and blocking of pores by oil and dead skin under the influence of hormones. There are multiple factors which can aggravate or precipitate acne.",
    sections: [
      {
        heading: "What is Acne (Pimples)?",
        body: "It is a skin disorder affecting both males and females usually between 15-30 years of age but can affect or appear at any age. It is mainly seen on face followed by chest, back and arms. It happens due to increased oil secretion and blocking of pores by oil and dead skin under the influence of hormones. There are multiple factors which can aggravate or precipitate acne.",
      },
      {
        heading: "How is Acne Treated?",
        body: "Traditionally acne was considered a normal condition which comes and goes during teenage. However, if left untreated it will leave permanent marks or scars which are more difficult to treat. With current advances, it can be safely treated with simple topical and oral medications. Additionally there are newer peel solutions which will reduce the redness and marks associated with the acne. Red light phototherapy is the latest advancement which will kill the bacteriae and reduces the severity of acne within few sessions.",
      },
      {
        heading: "Benefits of Acne Control Treatment",
        body: "Chemical Peeling helps in exfoliating this dead skin layer and decreases oil secretion, hence helps in faster control of acne. It thus clears out acne from within the pores, decreases melanin content which causes pigmentation, reduces the appearance of new acne, and makes skin rejuvenated with even tone and texture. It is safe and effective.",
      },
      {
        heading: "Why Skin Sattva?",
        body: "At Skin Sattva, we treat acne holistically. After thorough consultation and examination our doctors will recommend a customised plan which will be a combination of topical oral and procedural treatments which will control the acne and reduce the marks associated with them. Our acne control treatment includes chemical peels and Intense Pulsed Light for a total of 6-8 sessions for best results depending upon the severity and grade of acne. Lifestyle changes and diet plan will be provided so that there will less chance of recurrence. All our treatments have no downtime and one can resume their work immediately. The treatment duration lasts for 30-40 minutes. There can be mild tingling sensation which is temporary and there are absolutely no long-term side effects.",
      },
      {
        heading: "Who Can Get It Done?",
        body: "Anyone with pimples/acne which are stubborn and have tendency to leave marks or pigmentation and scars can undergo this treatment.",
      },
    ],
    pointSections: [
      {
        heading: "What is Acne (Pimples)?",
        points: [
          "Acne is a skin disorder affecting both males and females, usually between 15-30 years of age.",
          "It can affect or appear at any age.",
          "It is mainly seen on the face, followed by the chest, back, and arms.",
          "It happens due to increased oil secretion and blocking of pores by oil and dead skin under the influence of hormones.",
          "There are multiple factors which can aggravate or precipitate acne.",
        ],
      },
      {
        heading: "How is Acne Treated?",
        points: [
          "Traditionally acne was considered a normal condition which comes and goes during teenage.",
          "If left untreated, acne can leave permanent marks or scars which are more difficult to treat.",
          "With current advances, acne can be safely treated with simple topical and oral medications.",
          "Newer peel solutions help reduce redness and marks associated with acne.",
          "Red light phototherapy helps kill bacteriae and reduces the severity of acne within few sessions.",
        ],
      },
      {
        heading: "Benefits of Acne Control Treatment",
        points: [
          "Chemical Peeling helps exfoliate the dead skin layer.",
          "It decreases oil secretion, helping in faster control of acne.",
          "It clears acne from within the pores.",
          "It decreases melanin content which causes pigmentation.",
          "It reduces the appearance of new acne.",
          "It makes skin rejuvenated with even tone and texture.",
          "It is safe and effective.",
        ],
      },
      {
        heading: "Why Skin Sattva?",
        points: [
          "At Skin Sattva, acne is treated holistically.",
          "After thorough consultation and examination, doctors recommend a customised plan.",
          "The plan combines topical, oral, and procedural treatments to control acne and reduce associated marks.",
          "Acne control treatment includes chemical peels and Intense Pulsed Light.",
          "A total of 6-8 sessions are recommended for best results depending upon acne severity and grade.",
          "Lifestyle changes and diet plan are provided to reduce chances of recurrence.",
          "Treatments have no downtime and patients can resume work immediately.",
          "Treatment duration lasts for 30-40 minutes.",
          "There can be mild tingling sensation which is temporary.",
          "There are absolutely no long-term side effects.",
        ],
      },
      {
        heading: "Who Can Get It Done?",
        points: [
          "Anyone with pimples/acne which are stubborn can undergo this treatment.",
          "It is suitable when acne has a tendency to leave marks, pigmentation, or scars.",
        ],
      },
    ],
    benefits: [
      "Exfoliates dead skin layer",
      "Decreases oil secretion",
      "Clears acne from within the pores",
      "Decreases pigmentation-causing melanin content",
      "Reduces the appearance of new acne",
      "Rejuvenates skin with even tone and texture",
    ],
  },
  psoriasis: {
    overview:
      "Psoriasis is a chronic skin condition that presents as red scaly patches on scalp, arms, legs and back. The exact cause of it is not known. However, there are newer treatments available in modern medicine which will keep the disease under control and prevent recurrences.",
    sections: [
      {
        heading: "How We Treat Psoriasis",
        body: "At Skin Sattva, we treat Psoriasis with combination of topical creams, oral medications and NBUVB. This newer treatment is devoid of side effects and can control the disease within few weeks. It is best suited for psoriasis that has affected a large body parts.",
      },
      {
        heading: "Our NBUVB Protocol",
        body: "Skin Sattva has latest Speigel series NBUVB therapy for psoriasis. One has to visit the centre every week for up to 12-16 weeks to see complete remission or cure. Regular follow ups are required to keep the disease under control.",
      },
      {
        heading: "Lifestyle Support",
        body: "Lifestyle lessons and dietary advice will be provided to all those who visit our centre. Visit today to know more about the treatments available at Skin Sattva for Psoriasis.",
      },
    ],
    pointSections: [
      {
        heading: "Psoriasis",
        points: [
          "Psoriasis is a chronic skin condition that presents as red scaly patches on scalp, arms, legs, and back.",
          "The exact cause of psoriasis is not known.",
          "Newer treatments available in modern medicine help keep the disease under control.",
          "These treatments also help prevent recurrences.",
        ],
      },
      {
        heading: "How We Treat Psoriasis",
        points: [
          "At Skin Sattva, Psoriasis is treated with a combination of topical creams, oral medications, and NBUVB.",
          "This newer treatment is devoid of side effects.",
          "It can control the disease within few weeks.",
          "It is best suited for psoriasis that has affected large body parts.",
        ],
      },
      {
        heading: "NBUVB Protocol",
        points: [
          "Skin Sattva has latest Speigel series NBUVB therapy for psoriasis.",
          "One has to visit the centre every week for up to 12-16 weeks.",
          "This protocol helps patients see complete remission or cure.",
          "Regular follow ups are required to keep the disease under control.",
        ],
      },
      {
        heading: "Lifestyle Support",
        points: [
          "Lifestyle lessons are provided to all those who visit the centre.",
          "Dietary advice is also provided.",
          "Visit today to know more about the treatments available at Skin Sattva for Psoriasis.",
        ],
      },
    ],
    benefits: [
      "Controls the disease within few weeks",
      "Suited for large body part involvement",
      "Latest Speigel series NBUVB therapy",
      "Weekly treatment protocol for 12-16 weeks",
      "Regular follow ups for disease control",
      "Lifestyle lessons and dietary advice",
    ],
  },
  vitiligo: {
    overview:
      "Vitiligo is a condition where the skin loses its color, causing white patches. It can affect anyone, but it often has a bigger impact on people with darker skin, as the contrast is more noticeable. This can lead to emotional challenges like low self-esteem, anxiety, and social isolation. It is considered an autoimmune condition where your immune cells attack the colour producing cells melanocytes.",
    sections: [
      {
        heading: "Modern Treatment Breakthroughs",
        body: "There has been no satisfactory treatment till now for this condition. However, newer treatments like NBUVB (Narrow Band Ultraviolet B) and Excimer light has revolutionized the outcome in vitiligo. At Skin Sattva we not only provide medical support but also emotional and psychological support which will in turn help in regaining the colour as well as the confidence.",
      },
      {
        heading: "Our Phototherapy Protocol",
        body: "Skin Sattva has the latest FDA approved whole body NBUVB unit, which is considered the most powerful stimulus for repigmentation. It not only brings the colour back on white patches but also prevent the spread of the disease to the other parts of the body. For small patches, we have the latest targeted phototherapy in the form of Excimer lamp which will bring back the color in 10-20 sessions. Both these treatments are given twice in a week or at least once in a week.",
      },
      {
        heading: "Home-Based Maintenance",
        body: "Once the colour is regained or 80% pigmentation is achieved, home bases phototherapy devices are given to our patients to be used at their home.",
      },
      {
        heading: "Advantages of Phototherapy",
        body: "Stimulates Melanin Production: UVB Phototherapy (narrowband or broadband) is particularly effective in stimulating the melanocytes in depigmented areas of the skin, promoting the repigmentation process. The UV light can help stimulate the production of melanin, the pigment that gives skin its color.\n\nNon-Invasive Treatment: Phototherapy is a non-invasive treatment option that does not require surgery or systemic medications, which may have more significant side effects.\n\nTargeted Treatment: Phototherapy can be applied to specific areas of the body where vitiligo is present, offering a targeted approach to repigmenting the skin, rather than affecting the entire body. This is especially beneficial for people with localized patches of vitiligo.\n\nEffective for Both Small and Large Patches: While phototherapy is most commonly used for smaller patches of vitiligo, it can also be effective for larger areas when combined with other treatments, offering flexibility in managing the condition.\n\nSafe and Controlled: Phototherapy is usually administered under medical supervision, ensuring that the treatment is safe and that the right amount of UV exposure is used to minimize the risk of side effects, such as burning or premature aging of the skin.\n\nReduced Risk of Side Effects: When used correctly and under professional guidance, phototherapy has fewer side effects compared to oral medications or other systemic treatments. It also avoids the use of steroids, which can have long-term risks when used in the treatment of vitiligo.\n\nBetter Tolerance and Fewer Risks: Compared to more aggressive treatments, such as systemic immunosuppressive drugs, phototherapy generally has fewer adverse effects, making it a preferable option for long-term management.\n\nNo Long-Term Commitment for Maintenance: Once significant repigmentation is achieved, some patients may only need maintenance treatments at periodic intervals to maintain the results.",
      },
      {
        heading: "Why Skin Sattva?",
        body: "Visit us to improve your appearance and boost your confidence.",
      },
    ],
    pointSections: [
      {
        heading: "Vitiligo",
        points: [
          "Vitiligo is a condition where the skin loses its color, causing white patches.",
          "It can affect anyone.",
          "It often has a bigger impact on people with darker skin because the contrast is more noticeable.",
          "This can lead to emotional challenges like low self-esteem, anxiety, and social isolation.",
          "It is considered an autoimmune condition where immune cells attack the colour producing cells, melanocytes.",
        ],
      },
      {
        heading: "Modern Treatment Breakthroughs",
        points: [
          "There has been no satisfactory treatment till now for this condition.",
          "Newer treatments like NBUVB (Narrow Band Ultraviolet B) and Excimer light have revolutionized the outcome in vitiligo.",
          "At Skin Sattva, medical support is provided along with emotional and psychological support.",
          "This support helps in regaining colour as well as confidence.",
        ],
      },
      {
        heading: "NBUVB and Excimer Phototherapy",
        points: [
          "Skin Sattva has the latest FDA approved whole body NBUVB unit.",
          "Whole body NBUVB is considered the most powerful stimulus for repigmentation.",
          "It brings colour back on white patches.",
          "It also helps prevent the spread of the disease to other parts of the body.",
          "For small patches, Skin Sattva uses targeted phototherapy in the form of Excimer lamp.",
          "Excimer lamp can bring back color in 10-20 sessions.",
          "Both treatments are given twice in a week or at least once in a week.",
          "Once colour is regained or 80% pigmentation is achieved, home based phototherapy devices are given to patients for use at home.",
        ],
      },
      {
        heading: "Advantages of Phototherapy",
        points: [
          "Stimulates Melanin Production: UVB Phototherapy is effective in stimulating melanocytes in depigmented areas of the skin.",
          "The UV light helps stimulate production of melanin, the pigment that gives skin its color.",
          "Non-Invasive Treatment: Phototherapy does not require surgery or systemic medications.",
          "Targeted Treatment: Phototherapy can be applied to specific areas where vitiligo is present.",
          "Targeted treatment is especially beneficial for localized patches of vitiligo.",
          "Effective for Both Small and Large Patches: it can be effective for smaller patches and larger areas when combined with other treatments.",
          "Safe and Controlled: treatment is administered under medical supervision.",
          "Controlled UV exposure helps minimize risks such as burning or premature aging of the skin.",
          "Reduced Risk of Side Effects: phototherapy has fewer side effects compared to oral medications or systemic treatments when used correctly.",
          "It avoids steroid use, which can have long-term risks in vitiligo treatment.",
          "Better Tolerance and Fewer Risks: compared to systemic immunosuppressive drugs, phototherapy generally has fewer adverse effects.",
          "No Long-Term Commitment for Maintenance: once significant repigmentation is achieved, some patients may only need periodic maintenance treatments.",
        ],
      },
      {
        heading: "Why Skin Sattva?",
        points: [
          "Visit us to improve your appearance and boost your confidence.",
        ],
      },
    ],
    benefits: [
      "Stimulates melanin production",
      "Non-invasive treatment",
      "Targeted treatment for localized patches",
      "Effective for both small and large patches",
      "Safe and controlled under medical supervision",
      "Reduced risk of side effects",
      "Better tolerance and fewer risks",
      "Periodic maintenance after repigmentation",
    ],
  },
};

const DOC_SERVICE_SLUGS = [
  "acne-control-therapy",
  "chemical-peels",
  "medifacials",
  "phototherapy",
  "pigmentation-reduction",
  "anti-aging-treatments",
  "psoriasis",
  "eczema",
  "vitiligo",
  "keloids",
  "lichen-planus",
  "fungal-infection",
  "urticaria-control-treatment",
  "acne-scar-reduction",
  "microneedling",
  "stretchmarks-treatment",
  "double-chin-reduction",
  "hair-loss-treatments",
  "hair-transplantation",
  "prp",
  "gfc",
  "qr678",
  "exosomes",
  "low-level-laser-therapy",
  "laser-hair-reduction",
  "laser-toning",
  "botox-fillers",
  "threadlift",
  "rf-facelift",
  "hifu",
  "vampire-facial",
  "oxygeneo-facial",
  "dermatosurgery",
  "skin-tag-removal",
  "mole-removal",
  "vitiligo-surgery",
  "cyst-excision",
  "punch-excision",
  "punch-biopsy",
];

export const services = allServices
  .filter((service) => DOC_SERVICE_SLUGS.includes(service.slug))
  .map((service) => ({
    ...service,
    content: documentServiceContentOverrides[service.slug]
      ? { ...service.content, ...documentServiceContentOverrides[service.slug] }
      : service.content,
  }));

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);
export const getServicesByCategory = (category) => services.filter((service) => service.category === category);
