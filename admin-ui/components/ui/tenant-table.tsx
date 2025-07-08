import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  
  type Tenant = {
    name: string
    slug: string
    managedBy: string
    status: string
  }
  
  export default function TenantTable({ tenants }: { tenants: Tenant[] }) {
    return (
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="text-sm font-semibold text-foreground">Name</TableHead>
            <TableHead className="text-sm font-semibold text-foreground">Slug</TableHead>
            <TableHead className="text-sm font-semibold text-foreground">Managed By</TableHead>
            <TableHead className="text-sm font-semibold text-foreground">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.slug}>
              <TableCell className="text-sm text-muted-foreground">{tenant.name}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{tenant.slug}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{tenant.managedBy}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    tenant.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {tenant.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  