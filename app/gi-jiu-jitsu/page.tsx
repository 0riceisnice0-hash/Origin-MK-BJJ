import ProgramPage, { programmeContent, programmeMetadata } from '../ProgramPage';

export const dynamic = 'force-static';
export const metadata = programmeMetadata('gi-jiu-jitsu');
export default function Page() { return <ProgramPage programme={programmeContent['gi-jiu-jitsu']} />; }
