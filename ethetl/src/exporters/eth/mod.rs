// Copyright 2022 BohuTANG.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

mod blocks;
mod ens;
mod logs;
mod receipts;
mod token_transfers;
mod transactions;

use arrow2::array::Array;
use arrow2::chunk::Chunk;
use arrow2::datatypes::Schema;
pub use blocks::BlockExporter;
use common_exceptions::Result;
pub use ens::EnsExporter;
pub use logs::LogsExporter;
pub use receipts::ReceiptExporter;
pub use token_transfers::TokenTransferExporter;
pub use transactions::TransactionExporter;

use crate::contexts::ContextRef;

pub async fn write_file(
    ctx: &ContextRef,
    path: &str,
    schema: Schema,
    columns: Chunk<Box<dyn Array>>,
    msg: &str,
) -> Result<()> {
    let path = format!("{}.parquet", path);
    log::info!("Write {} to {}", msg, path);
    common_storages::write_parquet(ctx.get_storage(), &path, schema, columns).await
}
