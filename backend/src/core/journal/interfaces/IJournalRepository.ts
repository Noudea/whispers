import IJournal from "./IJournal"

interface IJournalRepository {
  create({journal}: IJournal): Promise<IJournal>;
  // getById({id}: { id: string }): Promise<IJournal>;
  // update({id}: { id: string }): Promise<IJournal>;
  // delete({id}: { id: string }): Promise<IJournal>;
}

export default IJournalRepository
