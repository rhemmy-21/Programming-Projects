import { portfolioData } from "@/data/portfolioData";

export default function PrintResume() {
  return (
    <div className="hidden print:block p-8 bg-white text-black font-sans max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight uppercase">
          {portfolioData.personal.name}
        </h1>
        <p className="text-sm font-semibold text-neutral-800 mt-1">
          {portfolioData.personal.role}
        </p>
        <div className="text-xs text-neutral-700 mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <span>Email: {portfolioData.personal.email}</span>
          <span>Mobile: {portfolioData.personal.mobile}</span>
          <span>LinkedIn: {portfolioData.personal.linkedinDisplay}</span>
          <span>GitHub: {portfolioData.personal.githubDisplay}</span>
          <span>Address: {portfolioData.personal.address}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2">
          Professional Profile
        </h2>
        <p className="text-xs leading-relaxed text-neutral-800">
          {portfolioData.personal.bio}
        </p>
      </div>

      {/* Education */}
      <div className="mb-6 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-3">
          Education Background
        </h2>
        <div className="space-y-3">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="text-xs">
              <div className="flex justify-between font-bold text-neutral-900">
                <span>{edu.institution}</span>
                <span>{edu.period}</span>
              </div>
              <div className="text-neutral-700 italic">{edu.level} {edu.degree ? `• ${edu.degree}` : ""}</div>
              {edu.notes && <p className="text-neutral-600 mt-0.5">{edu.notes}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Leadership */}
      <div className="mb-6 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-3">
          Curriculars, Leadership & Experience
        </h2>
        <div className="space-y-4">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="text-xs">
              <div className="flex justify-between font-bold text-neutral-900">
                <span>
                  {exp.role} — {exp.organization}
                </span>
                <span>{exp.period}</span>
              </div>
              {exp.department && (
                <div className="text-neutral-600 text-[11px] mb-1">
                  Department: {exp.department}
                </div>
              )}
              <ul className="list-disc pl-4 space-y-1 text-neutral-800">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6 print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-3">
          Skills & Technical Competencies
        </h2>
        <div className="text-xs space-y-2">
          <div>
            <strong className="text-neutral-900">Programming Languages:</strong>{" "}
            HTML, CSS, JavaScript, C, Python, Java.
          </div>
          <div>
            <strong className="text-neutral-900">Multimedia & Graphic Design:</strong>{" "}
            Figma, Canva, GIMP Image Manipulation, Blender, Smart Draw, CapCut.
          </div>
          <div>
            <strong className="text-neutral-900">Productivity & Cloud Suites:</strong>{" "}
            Microsoft Office (Word, Excel, PowerPoint) and Google Workspace (Docs, Sheets, Slides, Drive).
          </div>
          <div>
            <strong className="text-neutral-900">Hardware & Troubleshooting:</strong>{" "}
            Computer hardware diagnostics, OS maintenance, LAN network configuration.
          </div>
          <div>
            <strong className="text-neutral-900">Interpersonal & Soft Skills:</strong>{" "}
            Technical Communication, Cross-Functional Teamwork, Analytical Problem-Solving, Critical Thinking, Time Management.
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="print-break-inside-avoid">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-400 pb-1 mb-2">
          Certifications & Assessments
        </h2>
        {portfolioData.certifications.map((cert, idx) => (
          <div key={idx} className="text-xs">
            <div className="flex justify-between font-bold text-neutral-900">
              <span>{cert.title}</span>
              <span>{cert.year}</span>
            </div>
            <div className="text-neutral-700 italic">{cert.issuer}</div>
            <p className="text-neutral-600 mt-0.5">{cert.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
